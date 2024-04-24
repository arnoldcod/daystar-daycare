const express = require("express");
const router = express.Router();



const PayRegisterModel = require("../models/paymentRegisterModel") //import model

router.get("/pay", (req, res)=> { //to run on the browser and display form on server file
    res.render("payment");  //from payment.pug
 });


//post route for form to database
 router.post("/pay", async(req, res)=> {
   try {  
      const payment = new PayRegisterModel(req.body);
      console.log(payment);
      await payment.save();  
      res.send('success paying for a baby!');
  

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error paying for baby...", error );
   }

 });

 //fetching payment from database 
 router.get("/pay", async (req, res)=> {
   try {
     let pay = await PayRegisterModel.find()
     res.render("payment", {pay:pay}) // to display babies from data base
     console.log("display pay", pay);

   } catch (error) {
      res.status(400).send("unable to find babies payment from database!");
      console.log("unable to find babies payment from database!...", error );
   }
   })


   //delete route for form in database
 router.post("/delete", async(req, res)=> {
   try {  
      await PayRegisterModel.deleteOne({_id:req.body.id});
      
      res.redirect("back");
      // res.send('success registering a baby!');
       //to display on same page//res.redirect("/childRegister")

   } catch (error) {
      res.status(400).send("unable to delete payment for baby from db!");
      console.log("error deleting payment for baby...", error );
   }

});




    //updating a payment for baby in the database
 router.get("/payUpdate/:id", async(req, res)=> { //payUpdate can be any
   try{
     const paymentUpdate = await PayRegisterModel.findOne({_id: req.params.id});
     res.render("paymentUpdate", {pay:babyUpdate});

   } catch(error){
      console.log("error finding a payment!", error);
      res.status(400).send("unable to find payment from the db!");  
   }
 })

 router.post("/paymentUpdate", async(req, res)=> {
   try {
      await PayRegisterModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/payment");

   } catch (error) {
      res.status(404).send("unable to update baby in the db!");  
   }
   
 });


  
 module.exports = router;