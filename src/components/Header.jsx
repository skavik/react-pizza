import React from "react";
import { NavLink } from "react-router-dom";
import logoPizza from "../assets/img/pizza-logo.svg";
import Button from "./Button";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <NavLink to="/">
          <div className="header__logo">
            <img width="38" src={logoPizza} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
        </NavLink>
        <div className="header__cart">
          <NavLink to="/cart">
            <Button className="button--cart" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
