const { Pacientes, Psicologos, Atendimentos } = require("../models");

const dashboardController = {
    async numeroPacientes(req, res) {
        try {
            const { count, rows } = await Pacientes.findAndCountAll({             
            offset: 10000,
            limit: 10000
            });

            res.status(200).json(count);
        }
        catch (error) {
            console.log(error);
        }
    },

    async numeroPsicologos(req, res) {
        try {
            const { count, rows } = await Psicologos.findAndCountAll({             
            offset: 10000,
            limit: 10000
            });

            res.status(200).json(count);
        }
        catch (error) {
            console.log(error);
        }
    },

    async numeroAtendimentos(req, res) {
        try {
            const { count, rows } = await Atendimentos.findAndCountAll({             
            offset: 10000,
            limit: 10000
            });

            res.status(200).json(count);
        }
        catch (error) {
            console.log(error);
        }
    },

    async mediaAtendimentos(req, res) {
        try {
            const { count, rows } = await Atendimentos.findAndCountAll({             
            offset: 10000,
            limit: 10000
            });

            res.status(200).json(count);
        }
        catch (error) {
            console.log(error);
        }
    },

}

module.exports = dashboardController