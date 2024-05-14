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
 router.post("/dollsRegister", async(req, res)=> { 
   try {  
      const doll = new DollModel(req.body); 
      console.log(doll);
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
     res.render("./shop/renderDolls", {dolls:dolls, registeredDolls}) // to display Dolls from data base
     console.log("display dolls", dolls);

   } catch (error) {
      res.status(400).send("unable to find dolls from database!");
      console.log("unable to find dolls from database!...", error );
   }
   })


   //delete route for each  doll form in database
router.post("/delete", async(req, res)=> {
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



 // Route to handle selling off dolls
router.get('/sell/:id', async (req, res) => {
   try {
       const { sellPrice } = req.body;
       const dollId = req.params.id;
       // Assuming you have a field in your Doll schema to mark it as sold
       const doll = await DollModel.findByIdAndUpdate(dollId, { sold: true, price: sellPrice });
       if (!doll) {
           return res.status(404).send("Doll not found");
       }
       res.redirect("/dolls"); // Redirect to dolls page or any other appropriate route
   } catch (error) {
       console.error("Error selling doll:", error);
       res.status(500).send("Internal server error");
   }
});




 module.exports = router;