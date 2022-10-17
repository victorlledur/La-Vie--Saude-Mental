const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");



const psicologosController = {
     async listPsicologos(req, res) {
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
                      
            const psicologo = await Psicologos.findOne({
                where: {
                    id,
                }
            });


            if (!psicologo) {
                res.status(404).json("Id não encontrado")                                
            };

            psicologo.senha = undefined

            res.status(200).json(psicologo)
        } catch (error) {
            console.log(error)
        }              
        
     },

     async createPsicologo(req,res) {
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
            console.log(error)            
        }
     },

     async updatePsicologo(req,res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, apresentação } = req.body;
            const newSenha = bcrypt.hashSync(senha, 10);
            

            await Psicologos.update(
                {
                    nome,
                    email,
                    senha: newSenha,
                    apresentação,

                },
                {
                    where: {
                    id,
                    }
                }
            );

            const psicologo = await Psicologos.findByPk(id);

            res.json(psicologo)
        } catch (error) {
            
        }
     },

     async deletePsicologo(req,res) {        
        try {
            const {id} = await req.params;

            const psicologo = await Psicologos.findOne({
                where: {
                    id,
                }
            });

            if (!psicologo) {
                res.status(404).json("Id não encontrado")                                
            };

            await Psicologos.destroy({
                where:{
                 id,
                },
            });

            
            res.sendStatus(204)
            
        } catch (error) {
            console.log(error)          
        }
     },

     
        
};

module.exports = psicologosController