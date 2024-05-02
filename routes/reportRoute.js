const express = require("express");
const router = express.Router();

router.get("/reports", (req, res)=> {
    res.render("./reports/report")
})

 //import models 
 const Reports = require("../models/reportModel");

 //route for the report pug file
 router.get("/reports", (req, res)=> {
    res.render("./reports/report");
 })


  //route for the revenue formpug file
  router.get("/revenue", (req, res)=> {
    res.render("./reports/revenue");
 })

 //post route for revenue form to database
 router.post("/revenue", async(req, res)=> { 
    try {  
       const revenue = new Reports(req.body); 
       console.log(revenue);
       await revenue.save();
       res.redirect(" ");
        //to display on same page////res.redirect("/sitters")
 
    } catch (error) {
       res.status(400).send("Sorry something wrong!");
       console.log("error registering sitter...", error );
    }  
  });
 


module.exports = router;