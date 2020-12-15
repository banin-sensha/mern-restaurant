import React, {useState} from 'react';
import burgerImage from '../images/burger.jpeg';

const NavBar = () => {
    const [restaurantOpenState, setRestaurantOpenState] = useState("Open");

    return (
        <div className="container pt-20x pb-20x pr-20x pl-20x flex">
            <div className="mr-20x">
                <img src={burgerImage} alt="Burger" height="200px" />
            </div>
            <div>
                <label className="restaurant-name fs-18x font-bold">Burger House And Crunchy Fried Chicken</label>
                <div className="flex mt-20x fs-12">
                    <div className="btn-state pt-5x pb-5x pl-5x pr-5x">
                        {restaurantOpenState}
                    </div>
                    <div className="silver-color pt-5x ml-10x">
                        American, Indian, Chinese, Fast Food
                    </div>
                </div>
                <p className="silver-color fs-15 font-medium">Bagbazar, Kathmandu, Nepal</p>
            </div>
        </div>
    );
}

export default NavBar;