const Atendimentos = require("../models/Atendimentos");
const authController = require("../controllers/authController");

const atendimentosController = {
    async listarAtendimentos(req,res){
        try {
            const listarAtendimentos = await Atendimentos.findAll();

            res.json(listarAtendimentos);
            res.sendStatus(200);
        }
        catch(error){
            console.log(error);
        }
    },

    async ByIdAtendimentos(req,res){
        try {
            const {id} = req.params;

            const atendimento = await Atendimentos.findByPk(id);

            if (!atendimento) {
                res.status(404).json("Id não encontrado")                                
            };

            res.json(atendimento);
            res.sendStatus(200);
        } catch (error) {
            console.log(error);
        }
    },
    async criarAtendimento(req,res) {
        try {
            const psicologo = authController.login();
            const { pacientes_id, data_atendimento, observacao, psicologos_id } = req.body;

            const newatendimento = await Atendimentos.create({
                data_atendimento,
                observacao,
                psicologos_id,
                pacientes_id,

            });

            res.json(newatendimento)
        } catch (error) { 
            console.log(error)            
        }
     },
}

module.exports = atendimentosController