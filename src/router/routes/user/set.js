const router = require("express").Router();
const db = require("../../../database.js");

router.set("/users/cadastro", async(req, res, next) => {

    


    const response = await db.execute("INSERT INTO users (id, guild, username) values (?, ?, ?)" [id, guild, username]);

})