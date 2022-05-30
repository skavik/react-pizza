import "./scss/app.scss";
import React from "react";

import { Header } from "./components";
import { Cart, Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";

function App() {
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={Pizzas} />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {};

export default connect(mapStateToProps)(App);
