var mongoose = require('mongoose');

// Product Schema
var ProductSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String
    },
    desc: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    count: {
        type: Number
    }
    
});

var Product  = mongoose.model('Product', ProductSchema);

module.exports = Product;