import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import {CartBlock} from "./../cartBlock/"


export const Header = () => {
    return(
        // test
        <div className="header">
            <div className="wrapper">
                <Link to="/" className="header__store-item">
                Game Store
                </Link>
            </div>
            <div className="wrapper header__cart-btn-wrapper">
                <CartBlock/>
            </div>
        </div>
    )

}