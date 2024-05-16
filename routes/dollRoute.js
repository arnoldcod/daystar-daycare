const express = require("express"); ////using routers from express
const router = express.Router(); /////accessing router function in express
const moment = require('moment');
const multer = require("multer");


const DollModel = require("../models/dollModel") 


// Image upload
let storage = multer.diskStorage({
   destination: (req, file, cb) => {
     cb(null, "public/images/uploads");
   },
   filename: (req, file, cb) => {
     cb(null, file.originalname);
   },
 });
 let upload = multer({ storage: storage })

//creating routes
router.get("/dollsRegister", (req, res)=> { 
    res.render("./shop/dolls");  ////file name that you want to render such as sittersRegiste.pug
 });


//post route for dolls to register to database
 router.post("/dollsRegister", upload.single("imageUpload"), async(req, res)=> { 
   try {  
      const doll = new DollModel(req.body);
      doll.imageUpload = req.file.path; // Sends image url to db
   
      await doll.save();
      res.redirect("/dolls");
       //to display on same page////res.redirect("/sitters")

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering doll...", error );
   }  
 });


  //fetching All dolls from database 
  router.get("/dolls", async (req, res)=> {
   try {
      let registeredDolls = await DollModel.countDocuments({}) // aggregations
     let dolls = await DollModel.find().sort({ $natural: -1});  //from line8
     res.render("./shop/renderDolls", {dolls:dolls, registeredDolls }) // to display Dolls from data base
     console.log("display dolls", dolls);

   } catch (error) {
      res.status(400).send("unable to find dolls from database!");
      console.log("unable to find dolls from database!...", error );
   }
   });


    
 // Sell Doll Route
 router.get("/sellDoll/:id", async (req, res) => {
   try {
     const sellDoll = await DollModel.findOne({ _id: req.params.id });
     res.render("./shop/dollSell", { doll: sellDoll});
   } catch (error) {
     console.log("Error fetching data for sell", error);
     res.status(400).send("Unable to find doll in the db");
   }
 });
 
 router.post("/sellDoll", async (req, res) => {
   const dollId = req.body.id; // Get the doll ID from the form body
   const quantityToSell = req.body.quantity; // Get the quantity to sell from the form body
 
   try {
     // Find the doll by ID
     const doll = await DollModel.findById(dollId);
 
     if (!doll) {
       return res.status(404).send("Doll not found");
     }
 
     console.log("Current doll quantity:", doll.quantity);
     console.log("Quantity to sell:", quantityToSell);
 
     // Reduce the quantity of the doll
     if (doll.quantity >= quantityToSell && quantityToSell > 0) {
       doll.quantity -= quantityToSell;
       if (doll.quantity === 0) {
         doll.status = "Sold Out";
       }
       await doll.save();
       res.redirect("/dolls"); // Redirect to the dolls list after selling
     } else {
       console.log("Invalid quantity or insufficient stock");
       console.log("Available quantity:", doll.quantity);
       console.log("Requested quantity to sell:", quantityToSell);
       return res.status(400).send("Invalid quantity or insufficient stock");
     }
   } catch (error) {
     console.log("Error selling doll", error);
     res.status(404).send("Unable to sell doll");
   }
 });




   //delete route for each  doll form in database
router.post("/deleteDoll", async(req, res)=> {
   try {  
      await DollModel.deleteOne({_id:req.body.id});
      res.redirect("back");
     
   } catch (error) {
      res.status(400).send("unable to delete doll from db!");
      console.log("error deleting doll...", error );
   }
 });


   //updating a Doll in the database
 router.get("/dollsUpdate/:id", async(req, res)=> { 
   try{
     const dollUpdate = await DollModel.findOne({_id: req.params.id});
     res.render("./shop/dollsUpdate", {doll:dollUpdate});

   } catch(error){
      console.log("error finding a  doll!", error);
      res.status(400).send("unable to find doll from the db!");  
   }
 })

 router.post("/dollsUpdate", async(req, res)=> {
   try {
      await DollModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/dolls");

   } catch (error) {
      res.status(404).send("unable to update doll in the db!");  
   }
 })





 module.exports = router;