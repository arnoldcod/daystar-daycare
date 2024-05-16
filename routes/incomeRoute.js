const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");



const IncomeModel = require("../models/incomeModel") //import model

router.get("/income", connectEnsureLogin.ensureLoggedIn(), (req, res)=> { 
    res.render("./reports/income");  
 });


//post route for form to database
 router.post("/income", async(req, res)=> {
   try {  
      const income = new IncomeModel(req.body);
      console.log(income);
      await income.save();  

      res.redirect("/incomeList");
  

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error register income...", error );
   }

 });

 //fetching incomes from database 
 router.get("/incomeList", connectEnsureLogin.ensureLoggedIn(), async (req, res)=> {
   try {
      let income = await IncomeModel.countDocuments({}) // aggregations
     let incomes = await IncomeModel.find()
     res.render("./reports/renderIncome", {incomes:incomes, income}) 
     console.log("display incomes", incomes);

   } catch (error) {
      res.status(400).send("unable to find incomesfrom database!");
      console.log("unable to find incomes from database!...", error );
   }
   })


   //delete route for income in database
 router.post("/deletes", async(req, res)=> {
   try {  
      await IncomeModel.deleteOne({_id:req.body.id});
      
      res.redirect("back");

   } catch (error) {
      res.status(400).send("unable to delete incomes from db!");
      console.log("error incomes for baby...", error );
   }

});

    //updating a income in the database
 router.get("/incomeUpdate/:id", connectEnsureLogin.ensureLoggedIn(), async(req, res)=> { 
   try{
     const incomeUpdate = await IncomeModel.findOne({_id: req.params.id});
     res.render("./reports/incomeUpdate", {income:incomeUpdate});

   } catch(error){
      console.log("error finding an income!", error);
      res.status(400).send("unable to find income from the db!");  
   }
 })

 router.post("/incomeUpdate", async(req, res)=> {
   try {
      await IncomeModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/incomeList");

   } catch (error) {
      res.status(404).send("unable to update income in the db!");  
   }
   
 });


  
 module.exports = router;