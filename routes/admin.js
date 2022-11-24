
const express = require("express");
const app = express(); // app değişkenine atadık
const db = require("../data/db");

const routerr = express.Router();

routerr.use("/login", (req,res)=>
{
    
    app.set("layout","../layouts/adminLayout")
    
    res.render("admin/pages/login/login")
}
)




module.exports = routerr;
