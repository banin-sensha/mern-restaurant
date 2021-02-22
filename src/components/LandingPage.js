import React, { useState } from 'react';
import '../scss/LandingPage.scss';
import CartItems from './CartItems';
import CategoryList from './CategoryList';
import FoodItems from './FoodItems';
import NavBar from './NavBar';

const LandingPage = () => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <div>
            <NavBar />
            <div className="flex">
                <CategoryList />
                <div className="flex-1">
                    <FoodItems setCartItems={setCartItems} />
                </div>
                <div className="flex-1">
                    <CartItems cartItems= {cartItems} />
                </div>
            </div>
        </div>
        
    );
}

export default LandingPage;