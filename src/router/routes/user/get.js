const router = require("express").Router();
const db = require("../../../database.js");

router.get("/users/:id", async(req, res, next) => {

    const response = await db.execute("select * from miyuki_shiba.user");
    if (!Number.isInteger(Number.parseInt(id))) {
        return res.status(400).json({
            message: "ID não é um numéro"
        });
    }
    const user = users.find(user => user.id == id);
    if (!user) {
        return res.status(200).json({
            message: "Usuário não foi encontrado"
        });
    }

    let users = [];
    for (let row of response) {
        users.push({
            id: row.id,
            nome: row.nickname
        });
    }
    res.status(200).json(users);

});

module.exports = router;
/*
    select * from miyuki_shiba.user

    
    const response = await execute("UPDATE user SET name = ? WHERE id = ?;", ["mrbait", 371428127911575555]);
*/