const express = require("express");
const router = express.Router();

router.get("/welcome", (req, res)=> {
    res.render("landing")
})

router.post("/welcome", (req, res)=> {
    res.render("landing")
})


module.exports = router;