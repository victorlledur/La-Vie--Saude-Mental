const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");
const ERRORS = require("../constants/errors");


const psicologosController = {
     async listPsicologos(req, res, next) {
        try {
            const listarPsicologos = await Psicologos.findAll();
    
            res.json(listarPsicologos);            
        } catch (error) {
            next(error);
            
        }
     },

     async byIdPsicologo(req, res, next) {
        try {

            const {id} = req.params;
                      
            const psicologo = await Psicologos.findOne({
                where: {
                    id,
                },
                attributes:["id", "nome", "email", "apresentacao"]
            });


            if (!psicologo) {
                return res.status(404).json(ERRORS.PSICOLOGOS.ID)                                
            };

            res.status(200).json(psicologo)
        } catch (error) {
            next(error)
        }              
        
     },

     async createPsicologo(req,res,next) {
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
            next(error)            
        }
     },

     async updatePsicologo(req,res,next) {
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

            if (!psicologo) {
                res.status(400).json(ERRORS.PSICOLOGOS.ID)                                
            };

            res.json(psicologo)
        } catch (error) {
            next(error)
            
        }
     },

     async deletePsicologo(req,res,next) {        
        try {
            const {id} = await req.params;

            const psicologo = await Psicologos.findOne({
                where: {
                    id,
                }
            });

            if (!psicologo) {
                res.status(404).json(ERRORS.PSICOLOGOS.ID)                                
            };

            await Psicologos.destroy({
                where:{
                 id,
                },
            });

            
            res.sendStatus(204)
            
        } catch (error) {
           next(error)          
        }
     },

     
        
};

module.exports = psicologosController