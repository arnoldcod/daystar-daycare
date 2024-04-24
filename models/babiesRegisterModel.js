const mongoose = require("mongoose");

const babiesRegisterSchema = new mongoose.Schema({
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
    parentNames:{
        type: String, 
        trim: true
    },
    contact:{
        type: Number, 
        unique: true
    },
    address:{
        type: String, 
        trim: true
    },
    periodOfStay:{
        type: String, 
        trim: true
    },
    childBroughtBy:{
        type: String, 
        trim: true
    },
    arrivalTime:{
        type: String, 
        trim: true
    },
    paidFee :{
        type: String, 
        trim: true
    },
    childPickedBy:{
        type: String, 
        trim: true
    },
    departureTime:{
        type: String, 
        trim: true
    },
    childNumber:{
        type: String, 
        unique: true
    }

});

module.exports = mongoose.model("babiesRegisterModel", babiesRegisterSchema)
