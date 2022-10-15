const Sequelize = require("sequelize");

const DB_NAME = "la-vie-saude-mental";
const DB_USER = "root";
const DB_PASS = "#1Shinomori";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
}
//objeto para guardar a conexão do banco de dados
let db = {};

try{
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
}catch(error){
    console.error("Erro ao tentar uma conexao com o banco de dados");
}

async function hasConection(){
    try {
        await db.authenticate();
        console.log("Banco de dados conectado")
    } catch (error) {
        console.error("Erro ao tentar se conectar")
    }
}

Object.assign(db, {
    hasConection,
})

module.exports = db;