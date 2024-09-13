const mongoose = require("mongoose");
const moment = require('moment');

const procurementRegisterSchema = new mongoose.Schema({
    datePurchased:{
        type: Date, 
        trim: true
    },
    vendor:{
        type: String,
        trim: true
    },
    itemName:{
        type: String, 
        trim: true
    },
    itemId:{
        type: String, 
        trim: true
    },
    itemQuantity:{
        type: Number, 
        trim: true
    },
    itemUnitPrice:{
        type: Number, 
        trim: true
    },
    measurement:{
        type: String, 
        trim: true
    },
    totalPrice:{
        type: Number, 
        trim: true
    },
    comment:{
        type: String, 
        trim: true
    },
    status:{
        type: String, 
        trim: true
    }
});


module.exports = mongoose.model("procurementModel", procurementRegisterSchema)
