const express = require("express"); ////using routers from express
const router = express.Router(); /////accessing router function in express



const SittersSchema = require("../models/sittersRegisterModel") ////import name of schema in model file


////creating routes
router.get("/sitters", (req, res)=> { //// the file that is displayed when user asks for form on localhost to display (newly introduced)
    res.render("sittersRegister");  ////file name that you want to render such as sittersRegiste.pug
 });


//post route for form to database
 router.post("/sitters", async(req, res)=> { ////same file name as user requests on localhost
   try {  
      const child = new SittersSchema(req.body); ////schema requests body
      console.log(child);
      await child.save();
      ////console.log(req.body)
      res.send('success registering a sitter!');
       //to display on same page////res.redirect("/sitters")

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error registering sitter...", error );
   }
   
 });


 ////export router
 module.exports = router;