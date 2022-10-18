const express = require("express");
const pacientesController = require ("../controllers/pacientesController");
const psicologosController = require("../controllers/psicologosController");
const atendimentosController = require("../controllers/atendimentosController");
const loginValidation = require("../validations/login/login");
const psicologoCreateValidation = require("../validations/psicologos/create");
const psicologoByIdValidation = require("../validations/psicologos/getOne");
const psicologoUpdateValidation = require("../validations/psicologos/update");
const authController = require("../controllers/authController");
const atendimentoCreateValidation = require("../validations/atendimentos/create")
const dashboardController = require("../controllers/dashboardController")
const routes = express.Router();

routes.post("/login", loginValidation, authController.login);

routes.get("/psicologos", psicologosController.listPsicologos);
routes.get("/psicologo/:id", psicologoByIdValidation, psicologosController.onePsicologo);
routes.post("/psicologo/criar", psicologoCreateValidation, psicologosController.createPsicologo);
routes.put("/psicologo/:id", psicologoUpdateValidation, psicologosController.updatePsicologo);
routes.delete("/psicologo/:id", psicologosController.deletePsicologo);

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimento/:id", atendimentosController.ByIdAtendimentos);
routes.post("/atendimento/criar",atendimentoCreateValidation, atendimentosController.criarAtendimento);

routes.get("/pacientes", pacientesController.listPacientes);
routes.get("/paciente/:id", pacientesController.onePaciente);
routes.post("/paciente/criar", pacientesController.createPaciente);
routes.put("/paciente/:id", pacientesController.updatePaciente);
routes.delete("/paciente/:id", pacientesController.deletePaciente);

routes.get("/dashboard/numero-pacientes", dashboardController.numeroPacientes);
routes.get("/dashboard/numero-atendimentos", dashboardController.numeroAtendimentos);
routes.get("/dashboard/numero-psicologos", dashboardController.numeroPsicologos);
routes.get("/dashboard/media-atendimentos", dashboardController.mediaAtendimentos);

module.exports = routes;