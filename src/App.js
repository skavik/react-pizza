import "./scss/app.scss";
import React from "react";

import { Header } from "./components";
import { Cart, Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { setPizzas } from "./redux/actions/pizzas";

function App(props) {
  const dispatch = useDispatch();

  const { items } = useSelector(({ pizzas }) => {
    return {
      items: pizzas.items,
    };
  });

  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={items} />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
