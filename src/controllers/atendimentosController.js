const { Atendimentos, Psicologos, Pacientes } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const auth = require("../middlewares/auth")
const ERRORS = require("../constants/errors")



const atendimentosController = {
    async listAtendimentos(req, res, next) {
        try {
            const listarAtendimentos = await Atendimentos.findAll();

            res.status(200).json(listarAtendimentos);
        }
        catch (error) {
            next(error);
        }
    },

    async byIdAtendimentos(req, res, next) {
        try {
            const { id } = req.params;

            const atendimento = await Atendimentos.findOne({
                where: {
                    id,
                }
            });
            if (!atendimento) {
                return res.status(404).json(ERRORS.ATENDIMENTOS.BYID)
            };

            res.status(200).json(atendimento);

        } catch (error) {
            next(error);
        }
    },
    async createAtendimento(req, res, next) {
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
            res.json(newAtendimento)
        } catch (error) {
            if (error.name === "SequelizeForeignKeyConstraintError") {
                res
                .status(400)
                .json(ERRORS.ATENDIMENTOS.CREATE)
            }
            next(error);            
        }
    },
}

module.exports = atendimentosController