const { Pacientes, Psicologos, Atendimentos } = require("../models");
const Sequelize = require("sequelize");


const dashboardController = {
    async numberPacientes(req, res) {
        try {
            const { count } = await Pacientes.findAndCountAll({             
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
            const { count } = await Psicologos.findAndCountAll({             
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
            const { count } = await Atendimentos.findAndCountAll({             
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
            const { count } = await Psicologos.findAndCountAll({             
                offset: 10000,
                limit: 10000
                });
                const numPsi = count;

                const countAtend = await Atendimentos.findAndCountAll({             
                    offset: 10000,
                    limit: 10000
                    });
                    const numAtend = countAtend.count

                    const average = numAtend / numPsi

                    res.json(average);

        }
        catch (error) {
            console.log(error);
        }
    },

}

module.exports = dashboardController