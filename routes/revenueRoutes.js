const express = require("express");
const router = express.Router();
const moment = require('moment');

const Revenue = require("../models/revenueModel");

router.get("/revenue",  (req, res)=> { //to run on the browser and display form on server file
    res.render("./reports/revenue");  
 });


//post route for revenue registered to database
 router.post("/revenue", async(req, res)=> {
   try {  
      const revenue = new Revenue(req.body);
      console.log(revenue);
      await revenue.save();
      
       res.redirect("/revenueView");

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering an expense...", error );
   }
 });


  //fetching All Revenue from database 
  router.get("/revenueView", async (req, res)=> {
    try {
      let revenues = await Revenue.find()  
      res.render("./reports/renderRevenue", {revenues:revenues}) // to display revenues from data base
      console.log("display items", revenues);
 
    } catch (error) {
       res.status(400).send("unable to find revenue from database!");
       console.log("unable to find revenue from database!...", error );
    }
    })


 module.exports = router;