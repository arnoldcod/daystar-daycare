const mongoose = require("mongoose");
const moment = require('moment');

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
        type: String, 
        trim: true
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
    comment:{
        type: String, 
        trim: true
    },
    status:{
        type: String, 
        trim: true
        // default: "Clocked-In"
        // enum: ["Clocked-In", "Clocked-Out"]
    },

    childNumber:{
        type: String, 
        unique: true
    },

   sitter:{
        type: String, 
        unique: true
    }

});

module.exports = mongoose.model("babiesRegisterModel", babiesRegisterSchema)
