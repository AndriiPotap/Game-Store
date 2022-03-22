import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./GameBuy.css";

import {Button} from "./../button"
import { deleteItemFromCart, setItemToCart } from '../../redux/cart/reducer';

export const GameBuy = ({game}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.itemsInCart);
  const isItemInCart = items.some(item => item.id === game.id)
  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart){
      dispatch(deleteItemFromCart(game.id))
    } else {
    dispatch(setItemToCart(game));
    }
  }
  return (
    <div className='game-buy'>
        <span className='game-buy__price'>{game.price} eur </span>
        <Button
        type={ isItemInCart ? 'secondary' : 'primary'}
        onClick={handleClick}
        >
         { isItemInCart ? 'Убрать из корзины' : 'В корзину!'}
        </Button>
    </div>
  )
}



