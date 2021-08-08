const express = require("express");
const router = express.Router();


async function init(){
    router.use(require("./get"));
}
module.exports = {router, init};