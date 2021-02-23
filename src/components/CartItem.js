import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({food, subtotal}) => {
    console.log('CartItem.food', food);
    return (
        <div className="cart-container">
            <div className="flex flex-between mb-10x">
                <div>
                    {food.name}
                </div>
                <div className="add-or-delete pr-10x pl-10x">
                    quant: {food.count}
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon className="mr-5x font-bold" icon={faRupeeSign} />
                        {food.price * food.count}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartItem;