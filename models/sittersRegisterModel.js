////introducing mongoose to model file
const mongoose = require("mongoose");


////access the schema function in mongoose
// const Schema = mongoose.schema;


////use function to build schema
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
    Religion:{
        type: String, 
        trim: true
    },
    levelOfEducation:{
        type: String, 
        trim: true
    },
    sitterNumber:{
        type: String, 
        unique: true
    }

});

module.exports = mongoose.model("SittersSchema", sittersRegisterSchema) 

///// ("Name of schema (could any of preferance ..best use name of file),  then  new schema file")
