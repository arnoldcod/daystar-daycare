const express = require("express"); ////using routers from express
const router = express.Router(); /////accessing router function in express



const SittersModel = require("../models/sittersRegisterModel") 


//creating routes
router.get("/sittersRegister", (req, res)=> { 
    res.render("sittersRegister");  ////file name that you want to render such as sittersRegiste.pug
 });



//post route for form to database
 router.post("/sittersRegister", async(req, res)=> { 
   try {  
      const sitter = new SittersModel(req.body); 
      console.log(sitter);
      await sitter.save();
      
      res.send('success registering a sitter!');
       //to display on same page////res.redirect("/sitters")

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering sitter...", error );
   }
   
 });


 ////export router
 module.exports = router;