// dependency
const express = require('express'); // for posting
const mongoose = require('mongoose'); // for mongodb
const path = require('path'); //for pug
const passport = require('passport'); //for passport
const moment = require('moment'); //for moment
const expressSession = require('express-session')({ // for express-session
  secret:"secret",
  resave: false,
  saveUninitialized: false
});

require("dotenv").config();

//routes
/**
 *! import register model with user details
 */
const CreateAccount= require("./models/createAccountModel");

const port = process.env.port || 3700  // listening to port


const babiesregistrationRoute = require("./routes/babiesRegisterRoute")// importing routes
const sittersRoute = require("./routes/sittersRegisterRoute")// importing routes
const createAdmin = require("./routes/createAccountRoute")// importing routes
const authenticationRoutes = require("./routes/authenticationRoutes") //importing routes
const index = require("./routes/indexRoute")// importing routes
const landing = require("./routes/landingRoute")// importing routes
const dashboard = require("./routes/maindashboardRoute")// importing routes
const procurements = require("./routes/procurementRegisterRoute")// importing routes
const income = require("./routes/incomeRoute")// importing routes
const expense = require("./routes/expenseRoute")// importing routes
const doll = require("./routes/dollRoute")// importing routes






//instantiation
const app = express();


//configuration
 mongoose.connect(process.env.DATABASE, {
});

mongoose.connection
  .once("open", () => {
    console.log("mongodb connection successfully open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
 });


 app.locals.moment = moment;

 app.set("view engine", "pug"); // setting the view engine to pug
 app.set("views", path.join(__dirname, "views")); //specify the directory where the views are found

 

//routes
/**
 *! Middleware
 */
app.use(express.static(path.join(__dirname, "public")))// for static files in dir public
app.use("/public/images/uploads", express.static(__dirname +"/public/images/uploads"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Express session  configurations
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//Passport Configurations
passport.use(CreateAccount.createStrategy());
passport.serializeUser(CreateAccount.serializeUser()); //ways of tracking user usage
passport.deserializeUser(CreateAccount.deserializeUser());//breaking system when user logs out


/**
 *! Use imported routes from above
 */
app.use("/", babiesregistrationRoute); //from imported routes above
app.use("/", sittersRoute); //from imported routes above
app.use("/", createAdmin); //from imported routes above
app.use("/", authenticationRoutes); //from imported routes above
app.use("/", index);
app.use("/", landing);
app.use("/", dashboard);
app.use("/", procurements);
app.use("/", income);
app.use("/", expense);
app.use("/", doll);






  // For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

  //always the last line in the code!!!
app.listen(port, () => console.log(`listening on port ${port}`));




//read about https status codes