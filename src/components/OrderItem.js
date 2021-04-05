import React from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faRupeeSign, faTrash } from '@fortawesome/free-solid-svg-icons';
import { showSuccess } from './toast_helper';

const OrderItem = ({item, setOrders, index}) => {
    const updateOrder = (e) => {
        e.preventDefault();
        //to be implemented

    }

    const deleteOrder = (e, id) => {
        e.preventDefault();

        axios.delete("http://localhost:5000/orders/" + id)
            .then(res => {
                if (res.status == 200) {
                    showSuccess("Order deleted successfully");
                    alert("Order deleted successfully");
                    axios.get("http://localhost:5000/orders/")
                        .then(res => {
                            setOrders(res.data);
                        })
                }
            })
    }

    return (
        <div className="mb-20x order-item">
            <div className="flex flex-between mb-15x food-item pb-30x pt-20x flex-middle" key={index}>
                <div>
                    <span>{index + 1}</span><span>. </span>
                </div>
                <div>
                    {item.name}
                </div>
                <div className="add-or-delete p-5x">
                    <span>quantity: </span>
                    <span>{item.count}</span>
                </div>
                <div>
                    <span className="font-bold">
                        <FontAwesomeIcon className="mr-5x" icon={faRupeeSign} />
                        {item.price * item.count}
                    </span>
                </div>
                <div onClick={updateOrder} className="curP">
                    <FontAwesomeIcon icon={faEdit} />
                </div>
                <div onClick={(e) => { deleteOrder(e, item._id) }} className="curP">
                    <FontAwesomeIcon icon={faTrash} />
                </div>
            </div>
        </div>
    )
}

export default OrderItem;