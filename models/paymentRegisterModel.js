const mongoose = require("mongoose");

const paymentRegisterSchema = new mongoose.Schema({
    childName:{
        type: String, 
        trim: true
    },
    childAge:{
        type: Number, 
        trim: true
    },
    periodOfStay:{
        type: String, 
        trim: true
    },
    childId:{
        type: String, 
        unique: true
    },
    contact:{
        type: Number, 
        unique: true
    },
    address:{
        type: String, 
        trim: true
    },
    payerName:{
        type: String, 
        trim: true
    },
    paymentDate:{
        type: String, 
        trim: true
    },
    paymentTime:{
        type: String, 
        trim: true
    },
    sitterId:{
        type: String, 
        trim: true
    },
    sitterPayment:{
        type: Number, 
        trim: true
    },
    babyHalfDay:{
        type: Number, 
        trim: true
    },
    babyFullDay:{
        type: Number, 
        trim: true
    }
});

module.exports = mongoose.model("paymentRegisterModel", paymentRegisterSchema)
