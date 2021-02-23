import React from 'react';
import EmptyCart from './EmptyCart';
import NonEmptyCart from './NonEmptyCart';

const CartItems = ({cartItems}) => {
    return (
        <div className="ml-50x mt-50x">
            {
                cartItems.length === 0 &&
                <EmptyCart />
            }
            {
                cartItems.length !== 0 && 
                <NonEmptyCart cartItems={cartItems}/>
            }
        </div>
    );
}

export default CartItems;