const express = require("express");
const psicologosController = require("../controllers/psicologoscontroller");
const routes = express.Router();


routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologo/:id", psicologosController.onePsicologo);
routes.post("/psicologo/criar", psicologosController.criarPsicologo);
routes.put("/psicologo/:id", psicologosController.updatePsicologo);
routes.delete("/psicologo/:id/deletar", psicologosController.deletarPisicologo);

module.exports = routes;