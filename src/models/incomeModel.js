////introducing mongoose to model file
const mongoose = require("mongoose");



////all data types like String, Date start with an uppercase
const reportRegisterSchema = new mongoose.Schema({
    date:{
        type: Date,
        trim: true
    },
    category:{
        type: String, 
        trim: true
    },
    totalIncome:{
        type: String, 
        trim: true
    },
    comment:{
        type: String, 
        trim: true
    }

});

module.exports = mongoose.model("income", reportRegisterSchema) 

///// ("Name of schema (could any of preferance ..best use name of file),  then  new schema file")
