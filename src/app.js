const express = require("express");
const app = express();
const routerManager = require("./router/routerManager.js");
const bootstrap_path = require("path");

const checkAuth = require("./auth/checkAuth");


app.use("/api/v1", checkAuth);

app.use("/api/v1", routerManager);

app.use("/", async(req, res, next) => {
    res.render("api-mysql/layouts/index.js");
    
    res.status(404).json({
        message: "not found"
    });
});

app.use(express.static(bootstrap_path.join(__dirname, "public")));


module.exports = app;