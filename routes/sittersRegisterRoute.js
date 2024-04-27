const express = require("express"); ////using routers from express
const router = express.Router(); /////accessing router function in express
const moment = require('moment');


const SittersModel = require("../models/sittersRegisterModel") 


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
     let sitters = await SittersModel.find()  //from line8
     res.render("./sitters/renderSitters", {sitters:sitters}) // to display sitters from data base
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





 ////export router
 module.exports = router;