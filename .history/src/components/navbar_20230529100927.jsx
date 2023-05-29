import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Bird } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to = "/"> 
                    <Bird size={32}/>
                </Link>
                <Link to = "/"> Home </Link>
                <Link to = "/contact"> Contact</Link>
                <Link to = "/register"> Register/Login </Link>
                <Link to = "/cart">
                    <ShoppingCart size={32}/>
                </Link>
            </div>
        </div>
    );
};