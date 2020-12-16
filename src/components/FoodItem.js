import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faRupeeSign } from '@fortawesome/free-solid-svg-icons';

const FoodItem = ({food}) => {
    return (
        <div className="font-medium fs-14 mb-20x">
            <div className="veg-icon pl-2x pr-2x mb-5x">
                <FontAwesomeIcon className="circle-icon fs-10 pb-2x" icon={faCircle} color="#60b246"/>
            </div>
            <div className="mb-5x">
                {food.name}
            </div>
            <div>
                <span className="font-bold">
                    <FontAwesomeIcon className="mr-5x" icon={faRupeeSign} />
                    {food.price}
                </span>
            </div>
        </div>
    );
}

export default FoodItem;