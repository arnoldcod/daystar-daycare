const express = require("express");
const router = express.Router();
const moment = require('moment');


const SittersModel = require("../models/sittersRegisterModel")

const BabiesRegisterModel = require("../models/babiesRegisterModel") //import model

router.get("/babiesRegister",  (req, res)=> { //to run on the browser and display form on server file
    res.render("babiesRegister");  //from babiesRegister.pug
 });


//post route for form to database
 router.post("/babiesRegister", async(req, res)=> {
   try {  
      const child = new BabiesRegisterModel(req.body);
      console.log(child);
      await child.save();
         res.send('success registering a baby!');

      // await child.save();
      // // res.redirect("/babiesRegister");
      // res.send('success registering a baby!');
       //to display on same page//res.redirect("/childRegister")

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering baby...", error );
   }
   
 });

 //fetching babies from database 
 router.get("/babies", async (req, res)=> {
   try {
     let babies = await BabiesRegisterModel.find()
     res.render("renderBabies", {babies:babies}) // to display babies from data base
     console.log("display babies", babies);

   } catch (error) {
      res.status(400).send("unable to find babies from database!");
      console.log("unable to find babies from database!...", error );
   }
   })

 //fetching list babies clocked in from database 
 router.get("/babyClockedIn", async (req, res)=> {
   try {
     let babies = await BabiesRegisterModel.find({status: "ClockedIn"})
     res.render("renderBabyClockIn", {babies:babies}) // to display babies from data base
     console.log("display babies clocked in", babies);

   } catch (error) {
      res.status(400).send("unable to find babies from database!");
      console.log("unable to find babies from database!...", error );
   }
   })

//delete route for form in database
 router.post("/delete", async(req, res)=> {
   try {  
      await BabiesRegisterModel.deleteOne({_id:req.body.id});
      
      res.redirect("back");
      // res.send('success registering a baby!');
       //to display on same page//res.redirect("/childRegister")

   } catch (error) {
      res.status(400).send("unable to delete baby from db!");
      console.log("error deleting baby...", error );
   }
   
 });


 //updating a baby in the database
 router.get("/babiesUpdate/:id", async(req, res)=> { //babiesUpdate can be any
   try{
     const babyUpdate = await BabiesRegisterModel.findOne({_id: req.params.id});
     res.render("babiesUpdate", {baby:babyUpdate});

   } catch(error){
      console.log("error finding a baby!", error);
      res.status(400).send("unable to find baby from the db!");  
   }
 })

 router.post("/babiesUpdate", async(req, res)=> {
   try {
      await BabiesRegisterModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/babies");

   } catch (error) {
      res.status(404).send("unable to update baby in the db!");  
   }
 })

 //clockin baby route for form in database
 router.get("/babyClockIn/:id", async(req, res)=> { 
   try{
      const sitters  = await SittersModel.find()
     const babyClockIn = await BabiesRegisterModel.findOne({_id: req.params.id});
     res.render("babyClockIn", {
      baby:babyClockIn,
      sitters:sitters
   });

   } catch(error){
      console.log("error finding a baby!", error);
      res.status(400).send("unable to find baby from the db!");  
   }
 })

 router.post("/babyClockIn", async(req, res)=> {
   try {
      await BabiesRegisterModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/babyClockIn");

   } catch (error) {
      res.status(404).send("unable to update baby in the db!");  
   }
 })



  //clockOut baby route for form in database
  router.get("/babyClockOut/:id", async(req, res)=> { 
   try{
     const babyClockOut = await BabiesRegisterModel.findOne({_id: req.params.id});
     res.render("babyClockOut", {baby:babyClockOut});

   } catch(error){
      console.log("error finding a baby!", error);
      res.status(400).send("unable to find baby from the db!");  
   }
 })

 router.post("/babyClockOut", async(req, res)=> {
   try {
      await BabiesRegisterModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/babyClockOut");

   } catch (error) {
      res.status(404).send("unable to update baby in the db!");  
   }
 })

 
 
 module.exports = router;