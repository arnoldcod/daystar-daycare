const express = require("express"); ////using routers from express
const router = express.Router(); /////accessing router function in express
const moment = require('moment');
const passport = require("passport");


const SittersModel = require("../models/sittersRegisterModel") 

// passport.authenticate("local", {failureRedirect: "/login"}),

//creating routes
router.get("/sittersRegister", (req, res)=> { 
    res.render("./sitters/sittersRegister");  ////file name that you want to render such as sittersRegiste.pug
 });


//post route for sitters to register to database
 router.post("/sittersRegister", async(req, res)=> { 
   try {  
      const sitter = new SittersModel(req.body); 
      console.log(sitter);
      await sitter.save();
      res.redirect("/sitters");
       //to display on same page////res.redirect("/sitters")

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering sitter...", error );
   }  
 });


  //fetching All Sitters from database 
  router.get("/sitters", async (req, res)=> {
   try {
      let registeredSitters = await SittersModel.countDocuments({}) // aggregations
     let sitters = await SittersModel.find().sort({ $natural: -1});  //from line8
     res.render("./sitters/renderSitters", {sitters:sitters, registeredSitters }) // to display sitters from data base
     console.log("display sitters", sitters);

   } catch (error) {
      res.status(400).send("unable to find babies from database!");
      console.log("unable to find babies from database!...", error );
   }
   })



   //delete route for each  sitter form in database
router.post("/deleted", async(req, res)=> {
   try {  
      await SittersModel.deleteOne({_id:req.body.id});
      res.redirect("back");
     
   } catch (error) {
      res.status(400).send("unable to delete sitter from db!");
      console.log("error deleting sitter...", error );
   }
 });



   //updating a Sitter in the database
 router.get("/sittersUpdate/:id", async(req, res)=> { 
   try{
     const sitterUpdate = await SittersModel.findOne({_id: req.params.id});
     res.render("./sitters/sittersUpdate", {sitter:sitterUpdate});

   } catch(error){
      console.log("error finding a sitter!", error);
      res.status(400).send("unable to find sitter from the db!");  
   }
 })

 router.post("/sittersUpdate", async(req, res)=> {
   try {
      await SittersModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/sitters");

   } catch (error) {
      res.status(404).send("unable to update sitter in the db!");  
   }
 })


 
 //fetching list sitters present from database 
 router.get("/sittersPresent", async (req, res)=> {
   try {
      let sittersPresent = await SittersModel.countDocuments({}) // aggregations
     let sitters = await SittersModel.find({status: "Present"})
     res.render("./sitters/renderSitterPresent", {sitters:sitters, sittersPresent}) // to display babies from data base
     console.log("display sitter present", sitters);

   } catch (error) {
      res.status(400).send("unable to find sitters from database!");
      console.log("unable to find sitters from database!...", error );
   }
   })



 //route to register present sitter form in database
 router.get("/sitterPresentRoute/:id", async(req, res)=> { 
   try{
      const sitter  = await SittersModel.findOne({_id: req.params.id});
     res.render("./sitters/sitterPresent", {sitter:sitter});

   } catch(error){
      console.log("error finding a Sitter!", error);
      res.status(400).send("unable to find Sitter from the db!");  
   }
 })

 router.post("/sitterPresentRoute", async(req, res)=> {
   try {
      await SittersModel.findOneAndUpdate({_id: req.query.id}, req.body);
      console.log(req.body);
      res.redirect("/sittersPresent");

   } catch (error) {
      res.status(404).send("unable to update Sitter in the db!");
      console.log("........................", error);  
   }
 })



 //fetching list sitters Absent from database 
 router.get("/sittersAbsent",  async (req, res)=> {
   try {
    let sittersAbsent = await SittersModel.countDocuments({}) // aggregations
     let sitters = await SittersModel.find({status: "Absent"})
     res.render("./sitters/renderSitterAbsent", {sitters:sitters, sittersAbsent}) // to display babies from data base

   } catch (error) {
      res.status(400).send("unable to find sitters from database!");
      console.log("unable to find sitters from database!...", error );
   }
   })


   //route to register Absent sitter form in database
 router.get("/sitterAbsentRoute/:id", async(req, res)=> { 
   try{
      const sitter  = await SittersModel.findOne({_id: req.params.id});
     res.render("./sitters/sitterAbsent", {sitter:sitter});

   } catch(error){
      console.log("error finding a Sitter!", error);
      res.status(400).send("unable to find Sitter from the db!");  
   }
 })
 

 router.post("/sitterAbsentRoute", async(req, res)=> {
   try {
      await SittersModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/sittersAbsent");

   } catch (error) {
      res.status(404).send("unable to find Sitter in the db!");  
   }
 })




 module.exports = router;