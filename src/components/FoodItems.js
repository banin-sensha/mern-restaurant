import React, {useEffect, useReducer, useState} from 'react';
import axios from 'axios';
import FoodItem from './FoodItem';
import AddOrDeleteItem from './AddOrDeleteItem';
import _ from 'lodash';

const reducer = (state, action) => {
    switch(action.type) {
        case 'updateCount': {
            let arr = (state || []).map((item) => {
                if (item._id === action.food._id) {
                    return action.food;
                }
                else {
                    return item;
                }
            });

            return arr;
        }
        
        case 'initialize':
            return [...state, action.food];

        default:
            return state;
    }
}

const FoodItems = ({setCartItems, categoryList, divRef}) => {
    const [foodItems, setFoodItems] = useState([]);

    const [foodItemsWithCount, dispatch] = useReducer(reducer, []);

    const dispatchAction = (action) => {
        dispatch(action);
    }
    
    useEffect(() => {
        axios.get("http://localhost:5000/foods/")
            .then(res => {
                setFoodItems(res.data);
            })
    }, []);

    useEffect(() => {
        let filteredCartItems = foodItemsWithCount.filter((item) => item.count > 0);
        setCartItems(filteredCartItems);
    }, [foodItemsWithCount]);

    var groupedFoodItems = _.groupBy(foodItems, "category_id");

    return (
        <div className="food-list pl-20x mt-20x">
            {
                (categoryList || []).map((item, index) => {
                    let categorizedFoodItem = _.find(groupedFoodItems, (value, key) => {
                        if (key == item._id) return value;
                    });

                    return (
                        <div key={index} ref={el => divRef.current[index] = el}>
                            <div className="header-food flex flex-center pt-10x pb-10x mb-15x">
                                {item.name}
                            </div>
                            {
                                (categorizedFoodItem || []).map((food, index) => (
                                    <div className="food-item flex flex-between mt-20x pb-10x" key={index}>
                                        <FoodItem food={food} />
                                        <AddOrDeleteItem food={food} dispatchAction={dispatchAction} />
                                    </div>
                                ))
                            }
                        </div>
                        
                    )
                })
            }
        </div>
    );
}

export default FoodItems;