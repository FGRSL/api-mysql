const router = require("express").Router();
const db = require("../../../database.js");

router.get("/users/:id", async(req, res, next) =>{

    const response = await db.execute("INSERT into miyuki_shiba.user");
  
    const user = users.find(user => user.id == id);
    if(!user){
        return res.status(200).json({
            message: "Usuário não foi encontrado"
        });
    }
    let users = [];
    for(let row of response){
        users.pop({
            id: row.id,
            nickname: row.nickname,
            guild: row.guild
        });
    }
    res.status(200).json(users);

});
router.get("/users", async(req, res, next) =>{
    const response = await db.execute("select from miyuki_shiba.user");

    res.status(200).json(response);
});

module.exports = router;