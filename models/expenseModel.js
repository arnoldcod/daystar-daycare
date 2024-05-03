const mongoose = require("mongoose");

const expenseRegisterSchema = new mongoose.Schema({
    date:{
        type: Date, 
        trim: true
    },
    category:{
        type: String, 
        trim: true
    },
    totalPayment:{
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

module.exports = mongoose.model("Expense", expenseRegisterSchema);
