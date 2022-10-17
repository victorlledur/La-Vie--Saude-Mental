const express = require("express");
const pacientesController = require ("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const loginValidation = require("../validations/login/login");
const authController = require("../controllers/authController");
const routes = express.Router();

routes.post("/login", loginValidation, authController.login);

routes.get("/psicologos", psicologosController.listPsicologos);
routes.get("/psicologo/:id", psicologosController.onePsicologo);
routes.post("/psicologo/criar", psicologosController.createPsicologo);
routes.put("/psicologo/:id", psicologosController.updatePsicologo);
routes.delete("/psicologo/:id", psicologosController.deletePsicologo);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.ByIdAtendimentos);
routes.post("/atedimento/criar",atendimentosController.criarAtendimento);

routes.get("/pacientes", pacientesController.listPacientes);
routes.get("/paciente/:id", pacientesController.onePaciente);
routes.post("/paciente/criar", pacientesController.createPaciente);
routes.put("/paciente/:id", pacientesController.updatePaciente);
routes.delete("/paciente/:id", pacientesController.deletePaciente);


module.exports = routes;