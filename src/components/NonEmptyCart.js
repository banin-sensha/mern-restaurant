import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { showSuccess } from './toast_helper';


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

    const placeOrder = (e) => {
        e.preventDefault();

        console.log('cartItems', cartItems);
        var name = cartItems[0].name;
        var price = cartItems[0].price;
        var count = cartItems[0].count;

        axios.post("http://localhost:5000/orders", {name, price, count})
            .then((result) => {
                console.log('result', result);
                if (result.status == 200) {
                    showSuccess("Order placed successfully");
                    alert("Order placed successfully. Please go to Orders tab to see orders.")
                }
            });
    }

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
            {/* <Link to="/checkout" className="link"> */}
                <div 
                    className="checkout mt-25x flex flex-center pt-10x pl-10x pr-10x pb-10x curP"
                    onClick={placeOrder}
                >
                    <div>
                        Order
                    </div>
                </div>
            {/* </Link> */}
            
        </div>
    );
}

export default NonEmptyCart;