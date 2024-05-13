const express = require("express");
const router = express.Router();
const passport = require("passport");

const SittersModel = require("../models/sittersRegisterModel")   //import model
const BabiesRegisterModel = require("../models/babiesRegisterModel") //import model



router.get("/dashboard", (req, res)=> {
    res.render("./noModelPugs/maindashboard")
})

router.post("/dashboard", (req, res)=> {
    res.render("./noModelPugs/maindashboard")
})


//fetching All babies from database 
router.get("/dashboard", async (req, res)=> {
    try {
       let registeredBabies = await BabiesRegisterModel.countDocuments({}) // aggregations
      let babies = await BabiesRegisterModel.find()  //from line8
      res.redirect("/dashboard", {babies:babies, registeredBabies }) // to display babies from data base
      console.log("display babies", babies);
 
    } catch (error) {
       res.status(400).send("unable to find babies from database!");
       console.log("unable to find babies from database!...", error );
    }
    })
 
 


module.exports = router;