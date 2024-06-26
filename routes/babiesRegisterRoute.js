const express = require("express");
const router = express.Router();
const moment = require("moment");
const connectEnsureLogin = require("connect-ensure-login");

const SittersModel = require("../models/sittersRegisterModel"); //import model
const BabiesRegisterModel = require("../models/babiesRegisterModel"); //import model

router.get( "/babiesRegister",
    connectEnsureLogin.ensureLoggedIn(), (req, res) => {
        //to run on the browser and display form on server file
        res.render("./babies/babiesRegister"); //from babiesRegister.pug
    }
);

//post route for babiesregistered to database
router.post("/babiesRegister", async (req, res) => {
    try {
        const child = new BabiesRegisterModel(req.body);
        console.log(child);
        await child.save();

        res.redirect("babies");

    } catch (error) {
        res.status(400).send("Sorry something wrong!");
        console.log("error registering baby...", error);
    }
});

//fetching All babies from database
router.get("/babies", connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
    try {
        let babies = await BabiesRegisterModel.find().sort({ $natural: -1 }); //from line8
        res.render("./babies/renderBabies", { babies: babies }); // to display babies from data base
        console.log("display babies", babies);
    } catch (error) {
        res.status(400).send("unable to find babies from database!");
        console.log("unable to find babies from database!...", error);
    }
});

//fetching list all babies clocked in from database
router.get(
    "/babyClockIn",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            let babies = await BabiesRegisterModel.find({
                status: "Present",
            }).sort({ $natural: -1 });
            res.render("./babies/renderBabyClockIn", { babies: babies }); // to display babies from data base
            console.log("display babies clocked in", babies);
        } catch (error) {
            res.status(400).send("unable to find babies from database!");
            console.log("unable to find babies from database!...", error);
        }
    }
);

//  //delete route for baby clocked in in database
//  router.post("/deleteBabyClockedIn", async(req, res)=> {
//    try {
//       await BabiesRegisterModel.deleteOne({_id:req.body.id});

//       res.redirect("back");

//    } catch (error) {
//       res.status(400).send("unable to delete baby from db!");
//       console.log("error deleting baby...", error );
//    }
//  });

//fetching list babies clocked Out from database
router.get(
    "/clockingOutList",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            let BabyClockOut = await BabiesRegisterModel.countDocuments({}); // aggregations
            let babies = await BabiesRegisterModel.find({
                status: "Absent",
            }).sort({ $natural: -1 });
            res.render("./babies/renderBabyClockOut", {
                babies: babies,
                BabyClockOut,
            }); // to display babies from data base
            console.log("display babies clocked out", babies);
        } catch (error) {
            res.status(400).send("unable to find babies from database!");
            console.log("unable to find babies from database!...", error);
        }
    }
);

//delete route for baby in database
router.post("/deleteBaby", async (req, res) => {
    try {
        await BabiesRegisterModel.deleteOne({ _id: req.body.id });

        res.redirect("back");
    } catch (error) {
        res.status(400).send("unable to delete baby from db!");
        console.log("error deleting baby...", error);
    }
});

//updating a baby in the database
router.get(
    "/babiesUpdate/:id",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        //babiesUpdate can be any
        try {
            const babyUpdate = await BabiesRegisterModel.findOne({
                _id: req.params.id,
            });
            res.render("./babies/babiesUpdate", { baby: babyUpdate });
        } catch (error) {
            console.log("error finding a baby!", error);
            res.status(400).send("unable to find baby from the db!");
        }
    }
);

router.post("/babiesUpdate", async (req, res) => {
    try {
        await BabiesRegisterModel.findByIdAndUpdate(
            { _id: req.query.id },
            req.body
        );
        res.redirect("/babies");
    } catch (error) {
        res.status(404).send("unable to update baby in the db!");
    }
});

//clockin baby route for form in database
router.get("/babyClockIn/:id",
    connectEnsureLogin.ensureLoggedIn(), async (req, res) => {
        try {
            const sitters = await SittersModel.find();
            const babyClockIn = await BabiesRegisterModel.findOne({ _id: req.params.id });
            res.render("./babies/babyClockIn", { baby: babyClockIn, sitters: sitters });
        } catch (error) {
            console.log("error finding a baby!", error);
            res.status(400).send("unable to find baby from the db!");
        }
    }
);

router.post("/babyClockIn", async (req, res) => {
    try {
        await BabiesRegisterModel.findOneAndUpdate(
            { _id: req.query.id }, req.body );
        res.redirect("/babyClockIn");
    } catch (error) {
        res.status(404).send("unable to update baby in the db!");
    }
});

//clockOut baby route for form in database
router.get(
    "/ClockingOut/:id",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            const sitters = await SittersModel.find();
            const babyClockOut = await BabiesRegisterModel.findOne({ _id: req.params.id });
            res.render("./babies/babyClockOut", {
                baby: babyClockOut,
                sitters: sitters,
            });
        } catch (error) {
            console.log("error finding a baby!", error);
            res.status(400).send("unable to find baby from the db!");
        }
    }
);

router.post("/ClockingOut", async (req, res) => {
    try {
        await BabiesRegisterModel.findOneAndUpdate(
            { _id: req.query.id }, req.body );
        res.redirect("/clockingOutList");
    } catch (error) {
        res.status(404).send("unable to update baby in the db!");
    }
});

module.exports = router;
