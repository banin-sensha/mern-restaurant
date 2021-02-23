import React, { useRef, useState } from 'react';
import '../scss/LandingPage.scss';
import CartItems from './CartItems';
import CategoryList from './CategoryList';
import FoodItems from './FoodItems';
import NavBar from './NavBar';

const LandingPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const divRef = useRef([]);

    return (
        <div>
            <NavBar />
            <div className="flex">
                <CategoryList categoryList={categoryList} setCategoryList={setCategoryList} divRef={divRef} />
                <div className="flex-1">
                    <FoodItems setCartItems={setCartItems} categoryList={categoryList} divRef={divRef}/>
                </div>
                <div className="flex-1">
                    <CartItems cartItems= {cartItems} />
                </div>
            </div>
        </div>
        
    );
}

export default LandingPage;