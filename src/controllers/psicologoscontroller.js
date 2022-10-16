const Psicologos = require("../models/Psicologos");
const bcrypt = require("bcryptjs");



const psicologosController = {
     async listarPsicologos(req, res) {
        try {
            const listarPsicologos = await Psicologos.findAll();
    
            res.json(listarPsicologos);            
        } catch (error) {
            console.log(error);
            
        }
     },

     async onePsicologo(req, res) {
        try {
            const {id} = req.params;
            
            const psicologo = await Psicologos.findByPk(id);
           
            
            res.json(psicologo);
           
        } catch (error) {
            console.log(error)
        }
     },

     async criarPsicologo(req,res) {
        try {
            const { nome, email, senha, apresentacao } = req.body;

            const newSenha = bcrypt.hashSync(senha, 10);

            const newPsicologo = await Psicologos.create({
                nome,
                email,
                senha: newSenha,
                apresentacao,

            });

           res.status(201).json(newPsicologo)
        } catch (error) { 
            consol.log(error)            
        }
     },

     async updatePsicologo(req,res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, apresentação } = req.body;

            await Psicologos.update(
                {
                    nome,
                    email,
                    senha,
                    apresentação,

                },
                {
                    where: {
                    id,
                    }
                }
            );

            const person = await Psicologos.findByPk(id);

            res.json(person)
        } catch (error) {
            
        }
     },

     async deletarPisicologo(req,res) {        
        try {
            const {id} = await req.params;

            await Psicologos.destroy({
                where:{
                 id,
                },
            });

            res.json("Apagado com sucesso");
            res.sendStatus(204)
        } catch (error) {
            console.log(error)          
        }
     },

     
        
};

module.exports = psicologosController