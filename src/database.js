let connection = null;
require("dotenv").config();


function getConnection() {
    return connection;
}
async function init() {
    return new Promise((res, rej) => {
        const mysql = require("mysql2");
        const con = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSOWORD,
            database: process.env.DB_NAME
        });
        connection = con;
        con.connect(function(err) {
            if (err) {
                return rej(err);
            }
            return res();
        });
    });
}

async function execute(query) {
    return await execute(query, []);
}
/**
 * @param {*} query Parametros de query a serem passados "UPDATE, CREATE, DELETE, INSERT"
 * @param {*} values Valores a serem inseridos ou modificados.
 * cada "?" representa um parametro para ser passado
 * Modelo referencia: const response = await execute("UPDATE user SET name = ? WHERE id = ?;", [nome, user]);
 * @returns
 */
async function execute(query, values) {
    return new Promise((res, rej) => {
        connection.query(query, values, function(err, result) {
            if (err) {
                return rej(err);
            }
            return res(result);
        });

    });
}

module.exports = { init, execute }