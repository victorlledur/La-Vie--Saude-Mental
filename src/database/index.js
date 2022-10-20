const Sequelize = require("sequelize");
const ERRORS = require("../constants/errors");
const SUCCESS = require("../constants/succes");

const DB_NAME = "la_vie_saude_mental";
const DB_USER = "root";
const DB_PASS = "";
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
    console.error(ERRORS.DATABASE.SEQERROR);
}

async function hasConection(){
    try {
        await db.authenticate();
        console.log(SUCCESS.DATABASE.HASCONECTIONOK)
    } catch (error) {
        console.error(ERRORS.DATABASE.HASCONECTIONERROR)
    }
}

Object.assign(db, {
    hasConection,
})

module.exports = db;