import "./scss/app.scss";
import React from "react";

import { Header } from "./components";
import { Cart, Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux";

import { fetchPizzas } from "./redux/actions/pizzas";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas());
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
