import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import CartItem from './CartItem';

const NonEmptyCart = ({cartItems}) => {
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let count = _.reduce(cartItems, (result, item) => result + item.count, 0);
        setTotalItems(count);

    }, [cartItems]);

    return (
        <div>
            <div className="font-bold fs-30 mb-10x">
                Cart
            </div>
            <div className="font-medium">
                {
                    totalItems == 1 &&
                    totalItems + " item"
                }
                {
                    totalItems > 1 &&
                    totalItems + " items"
                }
            </div>
            <div>
                <CartItem />
            </div>

        </div>
    );
}

export default NonEmptyCart;