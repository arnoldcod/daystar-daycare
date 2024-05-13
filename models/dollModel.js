////introducing mongoose to model file
const mongoose = require("mongoose");



////all data types like String, Date start with an uppercase
const dollRegisterSchema = new mongoose.Schema({
    date:{
        type: Date,
        trim: true
    },
    name:{
        type: String, 
        trim: true
    },
    description:{
        type: String, 
        trim: true
    },
    quantity:{
        type: String, 
        trim: true
    },
    purchasePrice:{
        type: String, 
        unique: true
    },
    sellPrice:{
        type: String, 
        unique: true
    },
    comment:{
        type: String, 
        trim: true
    }

});

module.exports = mongoose.model("doll", dollRegisterSchema) 

///// ("Name of schema (could any of preferance ..best use name of file),  then  new schema file")
