const express = require("express");
const router = express.Router();

router.get("/reports", (req, res)=> {
    res.render("./reports/report")
})



module.exports = router;