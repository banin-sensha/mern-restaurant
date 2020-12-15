import React, {useEffect, useState} from 'react';
import axios from 'axios';

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
        <div className="food-list ml-10x pl-20x">
            {
                (foodItems || []).map((food, index) => (
                    <div
                        className="mt-20x font-medium fs-14" 
                        key={index}
                    >
                        <div className="mb-10x">
                            {food.name}
                        </div>
                        <div>
                            {food.price}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default FoodItems;