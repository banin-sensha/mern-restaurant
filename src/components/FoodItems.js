import React, {useEffect, useState} from 'react';
import axios from 'axios';
import FoodItem from './FoodItem';
import AddOrDeleteItem from './AddOrDeleteItem';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/foods/")
            .then(res => {
                console.log('res', res);
                setFoodItems(res.data);
            })
    }, []);

    return (
        <div className="food-list pl-20x mt-20x">
            {
                (foodItems || []).map((food, index) => (
                    <div className="food-item flex flex-between mt-20x pb-10x" key={index}>
                        <FoodItem food={food} />
                        <AddOrDeleteItem />
                    </div>
                ))
            }
        </div>
    );
}

export default FoodItems;