const { Pacientes, Psicologos, Atendimentos } = require("../models");
const Sequelize = require("sequelize");


const dashboardController = {
    async numberPacientes(req, res) {
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

    async numberPsicologos(req, res) {
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

    async numberAtendimentos(req, res) {
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

    async averageAtendimentos(req, res) {
        try {
            const average = await Psicologos.findAll({
                attributes: ['nome'],
                include: [
                    {
                        model: Atendimentos,
                        attributes: [[Sequelize.fn('count', Sequelize.col('psicologos_id')), 'media de atendimentos']]
                    }
                ],
                // raw: true,
                group: ['psicologos_id']    
            });
           
            res.json(average)
            
        }
        catch (error) {
            console.log(error);
        }
    },

}

module.exports = dashboardController