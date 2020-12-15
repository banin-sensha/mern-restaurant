import React from 'react';
import '../scss/LandingPage.scss';
import CategoryList from './CategoryList';
import FoodItems from './FoodItems';
import NavBar from './NavBar';

const LandingPage = () => {
    

    return (
        <div>
            <NavBar />
            <div className="flex">
                <CategoryList />
                <FoodItems />
            </div>
        </div>
        
    );
}

export default LandingPage;