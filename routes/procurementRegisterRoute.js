const express = require("express");
const router = express.Router();
const moment = require('moment');

const ProcurementModel = require("../models/procurementRegisterModel");

router.get("/procurementRegister",  (req, res)=> { //to run on the browser and display form on server file
    res.render("./procurement/procurementRegister");  
 });


//post route for babiesregistered to database
 router.post("/procurementRegister", async(req, res)=> {
   try {  
      const item = new ProcurementModel(req.body);
      console.log(item);
      await item.save();
      
         res.redirect("/procurementRegister");

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering baby...", error );
   }
 });

  //fetching All items from database 
  router.get("/procurementView", async (req, res)=> {
    try {
      let items = await ProcurementModel.find()  
      res.render("./procurement/renderProcurement", {items:items}) // to display items from data base
      console.log("display items", items);
 
    } catch (error) {
       res.status(400).send("unable to find babies from database!");
       console.log("unable to find babies from database!...", error );
    }
    })


     //updating an item in the database
 router.get("/procureUpdate/:id", async(req, res)=> { 
    try{
      const itemUpdate = await ProcurementModel.findOne({_id: req.params.id});
      res.render("./procurement/procurementUpdate", {item:itemUpdate});
 
    } catch(error){
       console.log("error finding a baby!", error);
       res.status(400).send("unable to find baby from the db!");  
    }
  })

  router.post("/procureUpdate", async(req, res)=> {
    try {
       await BabiesRegisterModel.findOneAndUpdate({_id: req.query.id}, req.body);
       res.redirect("/babies");
 
    } catch (error) {
       res.status(404).send("unable to update baby in the db!");  
    }
  })





 module.exports = router;