import React from 'react';
import cart from '../images/empty_cart.jpg';

const EmptyCart = () => {
    return (
        <div>
            <div className="cart-label fs-20 font-bold">
                Cart Empty
                    </div>
            <div className="mt-20x">
                <img src={cart} alt="Burger" height="200px" />
            </div>
        </div>
    )
}

export default EmptyCart;