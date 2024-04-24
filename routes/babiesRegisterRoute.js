const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");



const BabiesRegisterModel = require("../models/babiesRegisterModel") //import model

router.get("/babiesRegister", connectEnsureLogin.ensureLoggedIn(), (req, res)=> { //to run on the browser and display form on server file
    res.render("babiesRegister");  //from babiesRegister.pug
 });


//post route for form to database
 router.post("/babiesRegister", connectEnsureLogin.ensureLoggedIn(), async(req, res)=> {
   try {  
      const child = new BabiesRegisterModel(req.body);
      console.log(child);
      await babiesRegisterModel.register(child, req.body.password,(err)=>{
         if(error){
            throw err
         }
         res.redirect("/babiesRegister")
      })
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

 
 module.exports = router;