const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    count: {
        type: Number,
        required: true,
        default: 0
    }
})

const Orders = mongoose.model('Orders', ordersSchema);

module.exports = Orders;
