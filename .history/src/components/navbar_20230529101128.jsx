import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Bird } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <div>
          <Link to="/">
            <Bird size={32} />
          </Link>
        </div>
        <div>
          <Link to="/"> Home </Link>
          <Link to="/contact"> Contact</Link>
        </div>
        <div>
          <Link to="/register"> Register/Login </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
};
