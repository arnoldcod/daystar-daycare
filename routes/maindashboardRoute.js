const express = require("express");
const router = express.Router();

router.get("/dashboard", (req, res)=> {
    res.render("maindashboard")
})

router.post("/dashboard", (req, res)=> {
    res.render("maindashboard")
})


module.exports = router;