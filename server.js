const { init } = require("./src/app.js");
const db = require("./src/database.js");
const fetch = require("node-fetch");

async function inicialize() {
    await db.init();
    
        
    
    const http = require("http");
    const app = require("./src/app.js");
    const server = http.createServer(app);



    server.listen(process.env.PORT || 5000, () => {
        console.log("|-----------------------------------------------------------------------------------------------------------------|");
        console.log("|- BANCO DE DADOS ONLINE!" + " HORARIO DE INICIALIZAÇÃO " + new Date() + "-|");
        console.log("|-----------------------------------------------------------------------------------------------------------------|");
    });

}

inicialize();