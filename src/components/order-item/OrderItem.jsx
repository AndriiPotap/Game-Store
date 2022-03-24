import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch} from 'react-redux';
import { deleteItemFromCart } from '../../redux/cart/reducer';
import { GameCover } from '../game-cover';
import './OrderItem.css';

export const OrderItem = ({game}) => {
    const dispatch = useDispatch();

    const hendleClick = () => {
        dispatch(deleteItemFromCart((game.id)))
    }
  return (
    <div className='order-item'>
        <div className="order-item__cover">
            <GameCover image = {game.image}/>
        </div>
        <div className="order-item__title">
            <span>{game.title}</span>
        </div>
        <div className="order-item__price">
            <span>{game.price} eur</span>
            <AiFillCloseCircle
            className = 'cart-item__delete-icon'
            size={20}
            onClick={hendleClick}
            />
        </div>
    </div>
  )
}
