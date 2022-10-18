const Atendimentos = require("../models/Atendimentos");


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
            
            const { data_atendimento, observacao,pacientes_id, psicologos_id } = req.body;

            const newatendimento = await Atendimentos.create({
                data_atendimento,
                observacao,
                psicologos_id,
                pacientes_id,

            });
            if(!newatendimento.psicologos_id){
                res.status(400)
            };

            res.json(newatendimento)
        } catch (error) { 
            console.log(error)            
        }
     },
}

module.exports = atendimentosController