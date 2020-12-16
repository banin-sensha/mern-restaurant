import React from 'react';
import '../scss/LandingPage.scss';
import CartItems from './CartItems';
import CategoryList from './CategoryList';
import FoodItems from './FoodItems';
import NavBar from './NavBar';

const LandingPage = () => {
    

    return (
        <div>
            <NavBar />
            <div className="flex">
                <CategoryList />
                <div className="flex-1">
                    <FoodItems />
                </div>
                <div className="flex-1">
                    <CartItems />
                </div>
            </div>
        </div>
        
    );
}

export default LandingPage;