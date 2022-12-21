
const express = require("express");
const router = express.Router();
const db = require("../data/db");

router.use("/login", (req,res)=>
{
    
    app.set("layout","../layouts/adminLayout")
    
    res.render("admin/pages/login/login")
})

module.exports = router;
