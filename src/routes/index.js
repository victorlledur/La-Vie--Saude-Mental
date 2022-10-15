const express = require("express");
const psicologosController = require("../controllers/psicologoscontroller");
const loginValidation = require("../validations/login/login");
const authController = require("../controllers/authController");
const routes = express.Router();

routes.post("/login", loginValidation, authController.login);

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologo/:id", psicologosController.onePsicologo);
routes.post("/psicologo/criar", psicologosController.criarPsicologo);
routes.put("/psicologo/:id", psicologosController.updatePsicologo);
routes.delete("/psicologo/:id/deletar", psicologosController.deletarPisicologo);

module.exports = routes;