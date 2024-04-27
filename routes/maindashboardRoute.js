const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res)=> {
    res.render("./noModelPugs/maindashboard")
})

router.post("/dashboard", (req, res)=> {
    res.render("./noModelPugs/maindashboard")
})


module.exports = router;