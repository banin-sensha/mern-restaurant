const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: 'Category' 
    }
})

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;



