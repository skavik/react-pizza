import "./scss/app.scss";
import React from "react";

import { Header } from "./components";
import { Cart, Home } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import store from "./redux/store";
import { setPizzas } from "./redux/actions/pizzas";


function App(props) {
  React.useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      store.dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={props.items} />} exact />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setPizzas: items => dispatch(setPizzas(items))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
