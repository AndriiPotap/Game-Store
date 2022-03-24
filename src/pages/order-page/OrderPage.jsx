import React from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from '../../components/order-item';
import { calcTotalPrice } from '../../utils';

import './OrderPage.css';

export const OrderPage = () => {
    const items = useSelector(state => state.cart.itemsInCart)
  return (
    <div className='order=page'>
        <div className="order-page__left">
            {items.map(game => <OrderItem game={game}/>)}
        </div>
        <div className="order-page__right">
            <div className="order-page__total-price">
                <span>{items.length} товаров на суму {calcTotalPrice(items)} eur</span>
            </div>
        </div>

    </div>
  )
}
