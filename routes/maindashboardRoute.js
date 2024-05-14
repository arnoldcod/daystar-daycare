const express = require("express");
const router = express.Router();


const SittersModel = require("../models/sittersRegisterModel")   //import model
const BabiesRegisterModel = require("../models/babiesRegisterModel") //import model
const ProcurementModel = require("../models/procurementRegisterModel");
const IncomeModel = require("../models/incomeModel") //import model
const ExpenseModel = require("../models/expenseModel") //import model
const DollModel = require("../models/dollModel") 




//fetching All babies from database 
router.get("/dashboard", async (req, res)=> {
    try {
       let registeredBabies = await BabiesRegisterModel.countDocuments({}) // aggregations
       let BabyClockIn = await BabiesRegisterModel.countDocuments({}) // aggregations
       let BabyClockOut = await BabiesRegisterModel.countDocuments({}) // aggregations
       let registeredSitters = await SittersModel.countDocuments({}) // aggregations
       let sittersPresent = await SittersModel.countDocuments({}) // aggregations
       let sittersAbsent = await SittersModel.countDocuments({}) // aggregations
       let registeredItems = await ProcurementModel.countDocuments({}) // aggregations
       let itemsAvailable = await ProcurementModel.countDocuments({}) // aggregations
       let income = await IncomeModel.countDocuments({}) // aggregations
       let expense = await ExpenseModel.countDocuments({}) // aggregations
       let registeredDolls= await DollModel.countDocuments({}) // aggregations

      let babies = await BabiesRegisterModel.find()  //from line8

      res.render("./noModelPugs/maindashboard", { 
         registeredBabies, BabyClockIn, BabyClockOut, 
         registeredSitters, sittersPresent, sittersAbsent,
         registeredItems, itemsAvailable,
         income, expense ,
         registeredDolls}) // to display babies from data base
      console.log("display babies", babies);
 
    } catch (error) {
       res.status(400).send("unable to find babies from database!");
       console.log("unable to find babies from database!...", error );
    }
    })
 

module.exports = router;