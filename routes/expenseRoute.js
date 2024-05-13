const express = require("express");
const router = express.Router();



const ExpenseModel = require("../models/expenseModel") //import model

//get route
router.get("/expense", (req, res)=> { 
    res.render("./reports/expense");  
 });


//post route for form to database
 router.post("/expense", async(req, res)=> {
   try {  
      const expense = new ExpenseModel(req.body);
      console.log(expense);
      await expense.save();  

      res.redirect("/expenseList");
  

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error register income...", error );
   }

 });

 //fetching expenses from database 
 router.get("/expenseList", async (req, res)=> {
   try {
      let expense = await ExpenseModel.countDocuments({}) // aggregations
     let expenses = await ExpenseModel.find()
     res.render("./reports/renderExpense", {expenses:expenses, expense}) 
     console.log("display expenses", expenses);

   } catch (error) {
      res.status(400).send("unable to find expenses from database!");
      console.log("unable to find expenses from database!...", error );
   }
   })


   //delete route for income in database
 router.post("/deletes", async(req, res)=> {
   try {  
      await ExpenseModel.deleteOne({_id:req.body.id});
      
      res.redirect("back");

   } catch (error) {
      res.status(400).send("unable to delete expenses from db!");
      console.log("error finding expenses...", error );
   }

});

    //updating an expense in the database
 router.get("/expenseUpdate/:id", async(req, res)=> { 
   try{
     const expenseUpdate = await ExpenseModel.findOne({_id: req.params.id});
     res.render("./reports/expenseUpdate", {expense:expenseUpdate});

   } catch(error){
      console.log("error finding an expense!", error);
      res.status(400).send("unable to find an expense from the db!");  
   }
 })

 router.post("/expenseUpdate", async(req, res)=> {
   try {
      await ExpenseModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/expenseList");

   } catch (error) {
      res.status(404).send("unable to update expense in the db!");  
   }
   
 });


  
 module.exports = router;