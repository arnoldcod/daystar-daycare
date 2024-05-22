const express = require("express");
const router = express.Router();
const moment = require("moment");
const connectEnsureLogin = require("connect-ensure-login");

const ProcurementModel = require("../models/procurementRegisterModel");

//creating routes
router.get(
    "/procurementRegister",
    connectEnsureLogin.ensureLoggedIn(),
    (req, res) => {
        //to run on the browser and display form on server file
        res.render("./procurement/procurementRegister");
    }
);

//post route for items registered to database
router.post("/procurementRegister", async (req, res) => {
    try {
        const item = new ProcurementModel(req.body);
        console.log(item);
        await item.save();
        res.redirect("/procurementView");
    } catch (error) {
        res.status(400).send("Sorry something wrong!");
        console.log("error registering baby...", error);
    }
});

//fetching All items from database
router.get(
    "/procurementView",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            let items = await ProcurementModel.find().sort({ $natural: -1 });
            res.render("./procurement/renderProcurement", { items: items }); // to display items from data base
            console.log("display items", items);
        } catch (error) {
            res.status(400).send("unable to find items from database!");
            console.log("unable to find items from database!...", error);
        }
    }
);

//updating an item in the database
router.get(
    "/procurementUpdate/:id",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            const itemUpdate = await ProcurementModel.findOne({
                _id: req.params.id,
            });
            res.render("./procurement/procurementUpdate", { item: itemUpdate });
        } catch (error) {
            console.log("error finding a item!", error);
            res.status(400).send("unable to find item from the db!");
        }
    }
);

router.post("/procurementUpdate", async (req, res) => {
    try {
        await ProcurementModel.findOneAndUpdate(
            { _id: req.query.id },
            req.body
        );
        res.redirect("/procurementView");
    } catch (error) {
        res.status(404).send("unable to update item in the db!");
    }
});

//delete route for form in database
router.post("/deleteItem", async (req, res) => {
    try {
        await ProcurementModel.deleteOne({ _id: req.body.id });
        res.redirect("back");
    } catch (error) {
        res.status(400).send("unable to itemfrom db!");
        console.log("error deleting item...", error);
    }
});

//fetching list all items available from database
router.get(
    "/itemAvailableRegistered",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            let itemsAvailable = await ProcurementModel.countDocuments({}); // aggregations
            let items = await ProcurementModel.find({
                status: "Available",
            }).sort({ $natural: -1 });
            res.render("./procurement/renderItemAvailable", {
                items: items,
                itemsAvailable,
            }); // to display items available from data base
            console.log("display items available", items);
        } catch (error) {
            res.status(400).send(
                "unable to find items available from database!"
            );
            console.log(
                "unable to find items available from database!...",
                error
            );
        }
    }
);

// item available form route for form in database
router.get(
    "/itemAvailable/:id",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            const item = await ProcurementModel.findOne({ _id: req.params.id });
            res.render("./procurement/itemAvailable", { item: item });
        } catch (error) {
            console.log("error finding a baby!", error);
            res.status(400).send("unable to find baby from the db!");
        }
    }
);

router.post("/itemAvailable", async (req, res) => {
    try {
        await ProcurementModel.findOneAndUpdate(
            { _id: req.query.id },
            req.body
        );
        res.redirect("/itemAvailableRegistered");
    } catch (error) {
        res.status(404).send("unable to  find item available in the db!");
    }
});

//fetching list all items Finished from database
router.get(
    "/itemFinishedRegistered",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            let items = await ProcurementModel.find({ status: "Finished" });
            res.render("./procurement/renderItemFinished", { items: items }); // to display items available from data base
            console.log("display items finished", items);
        } catch (error) {
            res.status(400).send(
                "unable to find items available from database!"
            );
            console.log(
                "unable to find items available from database!...",
                error
            );
        }
    }
);

// item Finished form route for form in database
router.get(
    "/itemFinished/:id",
    connectEnsureLogin.ensureLoggedIn(),
    async (req, res) => {
        try {
            const item = await ProcurementModel.findOne({ _id: req.params.id });
            res.render("./procurement/itemFinished", { item: item });
        } catch (error) {
            console.log("error finding a item!", error);
            res.status(400).send("unable to find item from the db!");
        }
    }
);

router.post("/itemFinished", async (req, res) => {
    try {
        await ProcurementModel.findOneAndUpdate(
            { _id: req.query.id },
            req.body
        );
        res.redirect("/itemFinishedRegistered");
    } catch (error) {
        res.status(404).send("unable to  find item available in the db!");
    }
});

module.exports = router;
