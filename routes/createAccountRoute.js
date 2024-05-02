const express = require("express");
const router = express.Router();
const passport = require("passport");



const CreateAccountModel = require("../models/createAccountModel"); //import model


router.get("/createAccount",  (req, res)=> { //to run on the browser and display form on server file
    res.render("./loginAndSignup/signup");  //from createAccount.pug
 });



////post route for form to database
 router.post("/createAccount", async(req, res)=> {
   try {  
      const adminRegister = new CreateAccountModel(req.body);
    
      await CreateAccountModel.register(adminRegister, req.body.password, (error)=> {
        if (error){
            throw error
        }
        res.redirect("/createAccount");
      });
      

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering an admin...", error );
   }

 });


 
 module.exports = router;
 