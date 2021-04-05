import React, {useEffect, useState} from 'react';
import axios from 'axios';
import _ from 'lodash';
import OrderItem from './OrderItem';

const Orders = () => {

    const [orders, setOrders] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:5000/orders/")
            .then(res => {
                setOrders(res.data);
            })
    }, []);

    console.log('orders', orders);

    return (    
        <div className="pl-20x pr-20x pt-20x">
            <div className="font-bold fs-30 flex flex-center mb-50x">
                Orders
            </div>
            
            <div>
                {
                    (orders || []).map((item, index) => (
                        <div key = {index}>
                            <OrderItem item={item} setOrders={setOrders} index={index}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Orders;