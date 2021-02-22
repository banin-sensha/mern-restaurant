import React from 'react';
import cart from '../images/empty_cart.jpg'

const CartItems = ({cartItems}) => {
    console.log('cartItems', cartItems);
    return (
        <div className="ml-50x mt-50x">
            {
                cartItems.length === 0 &&
                <div>
                    <div className="cart-label fs-20 font-bold">
                        Cart Empty
                    </div>
                    <div className="mt-20x">
                        <img src={cart} alt="Burger" height="200px" />
                    </div>
                </div>
            }
            {
                cartItems.length !== 0 && 
                <div>
        
                </div>
            }
            

        </div>
    );
}

export default CartItems;