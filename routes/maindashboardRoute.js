const express = require("express");
const router = express.Router();


const SittersModel = require("../models/sittersRegisterModel")   //import model
const BabiesRegisterModel = require("../models/babiesRegisterModel") //import model
const ProcurementModel = require("../models/procurementRegisterModel");
const IncomeModel = require("../models/incomeModel") //import model
const ExpenseModel = require("../models/expenseModel") //import model
const DollModel = require("../models/dollModel") // import model





//fetching All fields from database 
router.get("/dashboard", async (req, res)=> {
    try {
       let registeredBabies = await BabiesRegisterModel.countDocuments({}) // aggregations
       let BabyClockIn = await BabiesRegisterModel.countDocuments({}) // aggregations
       let BabyClockOut = await BabiesRegisterModel.countDocuments({}) // aggregations
       let registeredSitters = await SittersModel.countDocuments({}) // aggregations
       let sitters = await SittersModel.countDocuments({}) // aggregations
       let sittersAbsent = await SittersModel.countDocuments({}) // aggregations
       let registeredItems = await ProcurementModel.countDocuments({}) // aggregations
       let itemsAvailable = await ProcurementModel.countDocuments({}) // aggregations
       let income = await IncomeModel.countDocuments({}) // aggregations
       let expense = await ExpenseModel.countDocuments({}) // aggregations
       let registeredDolls= await DollModel.countDocuments({}) // aggregations
       let dollsSold= await DollModel.countDocuments({}) // aggregations

      let babies = await BabiesRegisterModel.find()  //from line8

      res.render("./noModelPugs/maindashboard", { 
         registeredBabies, BabyClockIn, BabyClockOut, 
         registeredSitters, sitters, sittersAbsent,
         registeredItems, itemsAvailable,
         income, expense , dollsSold,
         registeredDolls}) // to display babies from data base
      console.log("display babies", babies);
 
    } catch (error) {
       res.status(400).send("unable to find babies from database!");
       console.log("unable to find babies from database!...", error );
    }
    })






     ///search bar
 router.get('/search', async (req, res) => {
   try {
     const query = req.query.query;
     
     if (!query) {
       return res.render('search', { query: '', results: [], error: 'Please provide a search query' });
     }
 
     // Define an array of model names you want to search through
     const modelsToSearch = [BabiesRegisterModel, DollModel, ExpenseModel, IncomeModel, ProcurementModel,  SittersModel]; // Update this array with your model names
 
     // Perform asynchronous search queries across all models
     async.map(modelsToSearch, (model, callback) => {
       model.find({ $text: { $search: query } }, (err, results) => {
         if (err) {
           return callback(err);
         }
         callback(null, results);
       });
     }, (err, searchResults) => {
       if (err) {
         console.error('Error searching for items:', err);
         return res.status(500).send('Internal server error');
       }

        // Flatten the array of search results
        const flattenedResults = searchResults.flat();
 
        // Render the search results using a Pug template
        res.render('search-results', { query, results: flattenedResults });
      });
    } catch (error) {
      console.error('Error searching for items:', error);
      res.status(500).send('Internal server error');
    }
  });

 

module.exports = router;