const express = require("express");
const router = express.Router();
const moment = require('moment');

const Expense = require("../models/expenseModel");

router.get("/expense",  (req, res)=> { //to run on the browser and display form on server file
    res.render("./reports/expense");  
 });


//post route for expense registered to database
 router.post("/expense", async(req, res)=> {
   try {  
      const expense = new Expense(req.body);
      console.log(expense);
      await expense.save();
       res.redirect("/expenseView");

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering an expense...", error );
   }
 });


  //fetching All expenses from database 
  router.get("/expenseView", async (req, res)=> {
    try {
      let expenses = await Expense.find()  
      res.render("./reports/renderExpense", {expenses:expenses}) // to display expenses from data base
      console.log("display expenses", expenses);
 
    } catch (error) {
       res.status(400).send("unable to find expenses from database!");
       console.log("unable to find expenses from database!...", error );
    }
    })


 module.exports = router;