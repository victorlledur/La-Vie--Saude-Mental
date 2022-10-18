const { Atendimentos, Psicologos, Pacientes } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const auth = require("../middlewares/auth")



const atendimentosController = {
    async listAtendimentos(req, res) {
        try {
            const listarAtendimentos = await Atendimentos.findAll();

            res.status(200).json(listarAtendimentos);
        }
        catch (error) {
            console.log(error);
        }
    },

    async ByIdAtendimentos(req, res) {
        try {
            const { id } = req.params;

            const atendimento = await Atendimentos.findByPk(id);

            if (!atendimento) {
                res.status(404).json("Id não encontrado")
            };

            res.status(200).json(atendimento);

        } catch (error) {
            console.log(error);
        }
    },
    async criateAtendimento(req, res) {
        try {
            const pacienteId = Atendimentos.pacientes_id;

            const decoded = req.auth

            const decodedId = decoded.id;

            const { data_atendimento, observacao, pacientes_id, psicologos_id } = req.body;

            const newAtendimento = await Atendimentos.create(
                {
                    data_atendimento,
                    observacao,
                    psicologos_id: decodedId,
                    pacientes_id,
                }
            );
            if (!newAtendimento.psicologos_id || newAtendimento.pacientes_id != pacienteId) {
                res.status(400)
            };

            res.json(newAtendimento)
        } catch (error) {
            console.log(error)
        }
    },
}

module.exports = atendimentosController