import React from 'react';
import "./CartItem.css";

export const CartItem = (
    {
        title, price, id
    }
) => {
  return (
    <div className='cart-item'>
        <span>{title}</span>
        <div className='cart-items__price'>
            <span>{price} eur</span>
        </div>
    </div>
  )
}
