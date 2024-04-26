const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    imagePath: {
        type: String, 
        trim:true
    },
    title: {
        type: String, 
        trim:true
    },
    description: {
        type: String, 
        trim:true
    },
    price: {
        type: Number, 
       trim:true
    },
});

module.exports = mongoose.model("Product", productSchema);