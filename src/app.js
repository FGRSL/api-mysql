const express = require("express");
const app = express();
const routerManager = require("./router/routerManager.js");


const checkAuth = require("./auth/checkAuth");
app.use("/api/v1", checkAuth);

app.use("/api/v1", routerManager);

app.use("/", async(req, res, next) => {
    res.status(404).json({
        message: "not found"
    });
});
module.exports = app;