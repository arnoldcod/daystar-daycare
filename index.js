// dependency
const express = require('express'); // for posting
const mongoose = require('mongoose'); // for mongodb
const path = require('path'); //for pug
const passport = require('passport'); //for passport
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
const pay = require("./routes/paymentRoute")// importing routes


//instantiation
const app = express();


//configuration
 mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


mongoose.connection
  .once("open", () => {
    console.log("mongodb connection successfully open");
  })
  .on("error", err => {
    console.error(`Connection error: ${err.message}`);
 });

 app.set("view engine", "pug"); // setting the view engine to pug
 app.set("views", path.join(__dirname, "views")); //specify the directory where the views are found

 

//routes
/**
 *! Middleware
 */
app.use(express.static(path.join(__dirname, "public")))// for static files in dir public

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
app.use("/", pay);







/*
app.get('/', (req, res) => { 
    res.send('Homepage! Hello world.');
  });

app.get('/about', (req, res) => { 
    res.send('About page. Nice.');
  });
*/

  //syntax of the route
  //app.METHOD(PATH, HANDLER);
  /*app.get('/course', (req, res) => {res.send('You have hit the courses page.')} )

  // (req, res) => {res.send('You have hit the home page.')} .....this is a callback function


  app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
    // console.log(req.params) //{"bookId":":2'"}
  });

  app.get('/books/:bookId', (req, res) => {
    res.send(req.params);
  });

  // app.get('/students/:name', (req, res) => {
  //   res.send("this is my student's name " + req.params.name);
  // });

  app.get('/students/:studentId', (req, res) => {
    res.send("this is my student's Id " + req.params.studentId); //this is my student's Id :1
    console.log("studentId " + req.params)
  });

  app.get('/index', (req, res) => { 
    res.sendFile(__dirname + "/index.html");  //for indexfile
  });


  //query params
  app.get('/students', (req, res) => { 
    res.send("this is class " + req.query.class + " cohort " + req.query.cohort); //this is class nodejs cohort cse4
  });


  app.get('/babies', (req, res) => { 
    res.send("this is " + req.query.name + " age " + req.query.age);
  });


  //for register staff route to get info
  app.get('/registerstaff', (req, res) => { 
    res.sendFile(__dirname + "/register_staff.html");  //for indexfile
  });


//for register staff route to post info
 app.post('/registerstaff', (req, res) => {
  console.log(req.body)//post on body
  //res.redirect("/index")
  let baby = req.body
res.json({message:"staff registered", baby})
  
  // res.send("you have registered a baby")
 })
*/



  // For invalid routes
app.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

  //always the last line in the code!!!
app.listen(port, () => console.log(`listening on port ${port}`));




//read about https status codes