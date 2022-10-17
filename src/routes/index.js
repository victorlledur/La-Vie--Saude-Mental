const express = require("express");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const loginValidation = require("../validations/login/login");
const psicologosCreateValidation = require("../validations/psicologos/create");
const onepsicologoValidation = require("../validations/psicologos/getOne");
const updatepsicologoValidation = require("../validations/psicologos/update");
const authController = require("../controllers/authController");
const routes = express.Router();

routes.post("/login", loginValidation, authController.login);

routes.get("/psicologos", psicologosController.listPsicologos);
routes.get("/psicologo/:id", onepsicologoValidation, psicologosController.onePsicologo);
routes.post("/psicologo/criar", psicologosCreateValidation, psicologosController.createPsicologo);
routes.put("/psicologo/:id", updatepsicologoValidation, psicologosController.updatePsicologo);
routes.delete("/psicologo/:id", psicologosController.deletePsicologo);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.ByIdAtendimentos);
routes.post("/atedimento/criar",atendimentosController.criarAtendimento);

module.exports = routes;