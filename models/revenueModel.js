const mongoose = require("mongoose");

const revenueRegisterSchema = new mongoose.Schema({
    date:{
        type: Date, 
        trim: true
    },
    category:{
        type: String, 
        trim: true
    },
    totalPayments:{
        type: Number, 
        unique: true
    },
    day:{
        type: Number, 
        unique: true
    },
    comment:{
        type: String, 
        trim: true
    }

});

module.exports = mongoose.model("Revenue", revenueRegisterSchema)
