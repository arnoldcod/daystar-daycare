const express = require("express");
const router = express.Router();



const ExpenseModel = require("../models/expenseModel") //import model

//get route
router.get("/expense", (req, res)=> { 
    res.render("./reports/expense");  
 });


//post route for form to database
 router.post("/expense", async(req, res)=> {
   try {  
      const expense = new ExpenseModel(req.body);
      console.log(expense);
      await expense.save();  

      res.redirect("/expenseList");
  

   } catch (error) {
      res.status(400).send("Sorry something wrong!");
      console.log("error register income...", error );
   }

 });

 //fetching expenses from database 
 router.get("/expenseList", async (req, res)=> {

   try {
      const filters = {};
      const q = req.query.q;
      if (q) {
        // Filter by sitter name (first or last name) - like
        filters.$or = [
          { firstName: { $regex: q, $options: 'i' } },
          { lastName: { $regex: q, $options: 'i' } }
        ];
      }

     let expense = await ExpenseModel.countDocuments({}) // aggregations
     let expenses = await ExpenseModel.find(filters).sort({ $natural: -1}); 
     res.render("./reports/renderExpense", {expenses:expenses, expense, q}) 
     console.log("display expenses", expenses);

   } catch (error) {
      res.status(400).send("unable to find expenses from database!");
      console.log("unable to find expenses from database!...", error );
   }
   })




   //delete route for expense in database
 router.post("/deleteExpense", async(req, res)=> {
   try {  
      await ExpenseModel.deleteOne({_id:req.body.id});
      
      res.redirect("back");

   } catch (error) {
      res.status(400).send("unable to delete expenses from db!");
      console.log("error finding expenses...", error );
   }

});

    //updating an expense in the database
 router.get("/expenseUpdate/:id", async(req, res)=> { 
   try{
     const expenseUpdate = await ExpenseModel.findOne({_id: req.params.id});
     res.render("./reports/expenseUpdate", {expense:expenseUpdate});

   } catch(error){
      console.log("error finding an expense!", error);
      res.status(400).send("unable to find an expense from the db!");  
   }
 })

 router.post("/expenseUpdate", async(req, res)=> {
   try {
      await ExpenseModel.findOneAndUpdate({_id: req.query.id}, req.body);
      res.redirect("/expenseList");

   } catch (error) {
      res.status(404).send("unable to update expense in the db!");  
   }
   
 });




    ///search bar
    router.get('/search', async (req, res) => {
      try {
        const query = req.query.query;
        
        if (!query) {
          return res.render('search', { query: '', results: [], error: 'Please provide a search query' });
        }
    
        // Define an array of model names you want to search through
        const modelsToSearch = [babiesRegisterModel, DollModel, ExpenseModel, IncomeModel, ProcurementModel,  SittersModel]; // Update this array with your model names
    
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