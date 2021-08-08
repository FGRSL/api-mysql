const express = require("express");
const router = express.Router();
const endpoints = [
    require("./routes/user/userManager.js")
];

for(let endpoint of endpoints){
    endpoint.init();
    router.use(endpoint.router);
}

module.exports = router;