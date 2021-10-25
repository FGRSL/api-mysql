const router = require("express").Router();
const db = require("../../../database.js");


router.get("/home", async( req, res, next) =>{
    res.send("site teste!!!");
})

module.exports = router;