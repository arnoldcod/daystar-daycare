////introducing mongoose to model file
const mongoose = require("mongoose");



////all data types like String, Date start with an uppercase
const sittersRegisterSchema = new mongoose.Schema({
    name:{
        type: String, 
        trim: true
    },
    dob:{
        type: Date,
        trim: true
    },
    age:{
        type: Number, 
        trim: true
    },
    gender:{
        type: String, 
        trim: true
    },
    contact:{
        type: Number, 
        unique: true
    },
    paidFee:{
        type: Number, 
        trim: true
    },
    address:{
        type: String, 
        trim: true
    },
    nin:{
        type: String, 
        trim: true
    },
    recommenderName:{
        type: String, 
        trim: true
    },
    religion:{
        type: String, 
        trim: true
    },
    levelOfEducation:{
        type: String, 
        trim: true
    },
    status:{
        type: String, 
        trim: true
    },
    sitterNumber:{
        type: String, 
        unique: true
    },
    arrivalTime:{
        type: String, 
        trim: true
    },
    comment:{
        type: String, 
        trim: true
    }

});

module.exports = mongoose.model("SittersModel", sittersRegisterSchema) 

///// ("Name of schema (could any of preferance ..best use name of file),  then  new schema file")
