import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CartBlock.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {ItemsInCart} from './../items-in-cart';
import { CartMenu } from "../cart-menu";
import { calcTotalPrice } from "../../utils";

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrise = calcTotalPrice(items);
    return(
        <div className="cart-block">
            <ItemsInCart quantity={items.length}/>
            <AiOutlineShoppingCart size={25} className="cart-block__icon" onClick={()=> setIsCartMenuVisible(!isCartMenuVisible)}/>
            { totalPrise > 0 ? <span className="cart-block__total-price"> {totalPrise} EUR</span> : null}
            { isCartMenuVisible && <CartMenu items={items} onClick={()=>null}/>}
        </div>
    )
}