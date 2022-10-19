const express = require("express");
const routes = require("./routes");
const handleError = require("./middlewares/handleError");
const requestLog = require("./middlewares/requestLog");
const SUCCESS = require("./constants/succes");

const db = require("./database")

const app = express();

db.hasConection();

app.use(express.json());
app.use(requestLog);

app.use(routes);

app.use(handleError);

app.listen(3000, ()=> console.log(SUCCESS.APP.SERVEROK));