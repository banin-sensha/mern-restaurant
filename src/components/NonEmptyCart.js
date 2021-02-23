import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';


const NonEmptyCart = ({cartItems}) => {
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let count = _.reduce(cartItems, (result, item) => result + item.count, 0);
        setTotalItems(count);

    }, [cartItems]);

    const getSubtotal = () => {
        let subtotal = _.reduce(cartItems, (result, item) => {
            result = result + item.count * item.price;
            return result; 
        }, 0);

        return subtotal;
    };

    return (
        <div className="cart-container">
            <div className="font-bold fs-30 mb-10x">
                Cart
            </div>
            <div className="font-medium mb-15x">
                {
                    totalItems == 1 &&
                    totalItems + " ITEM"
                }
                {
                    totalItems > 1 &&
                    totalItems + " ITEMS"
                }
            </div>
            <div className="mb-20x">
                {
                    (cartItems || []).map((item, index) => 
                        <CartItem key={index} food={item} />
                    )
                }
                
            </div>
            <div className="flex flex-between font-bold">
                <div>
                    Subtotal
                </div>
                <div>
                    <span>
                        <FontAwesomeIcon  icon={faRupeeSign} />
                        {getSubtotal()}
                    </span>
                </div>
            </div>
            <div className="checkout mt-25x flex flex-center pt-10x pl-10x pr-10x pb-10x curP">
                <div>
                    Checkout -->
                </div>
            </div>
        </div>
    );
}

export default NonEmptyCart;