const express = require("express");
const router = express.Router();

router.get("/welcome", (req, res)=> {
    res.render("./noModelPugs/landing")
})

router.post("/welcome", (req, res)=> {
    res.render("./noModelPugs/landing")
})


module.exports = router;