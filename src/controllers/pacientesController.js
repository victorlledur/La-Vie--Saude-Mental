const { Pacientes } = require("../models");
const bcrypt = require("bcryptjs");



const pacientesController = {
    async listPacientes(req, res) {
       try {
           const listarPacientes = await Pacientes.findAll();
   
           res.status(200).json(listarPacientes);            
       } catch (error) {
           console.log(error);
           
       }
    },

    async byIdPaciente(req, res) {
       try {

           const {id} = req.params;
                     
           const paciente = await Pacientes.findOne({
               where: {
                   id,
               }
           });


           if (!paciente) {
               res.status(404).json("Id não encontrado")                                
           };

        res.status(200).json(paciente)

       } catch (error) {
           console.log(error)
       }              
       
    },

    async createPaciente(req,res) {
       try {
           const { nome, email, idade } = req.body;

           const newPaciente = await Pacientes.create({
               nome,
               email,
               idade

           });

          res.status(201).json(newPaciente)
       } catch (error) { 
           console.log(error)            
       }
    },

    async updatePaciente(req,res) {
       try {
           const { id } = req.params;
           const { nome, email, idade } = req.body;  


           await Pacientes.update(
               {
                   nome,
                   email,
                   idade

               },
               {
                   where: {
                   id,
                   }
               }
           );

           const paciente = await Pacientes.findByPk(id);

           if (!paciente) {
            res.status(400).json("Id não encontrado")                                
        };

           res.status(200).json(paciente)
       } catch (error) {
           
       }
    },

    async deletePaciente(req,res) {        
       try {
           const {id} = await req.params;

           const paciente = await Pacientes.findOne({
               where: {
                   id,
               }
           });

           if (!paciente) {
               res.status(404).json("Id não encontrado")                                
           };

           await Pacientes.destroy({
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

module.exports = pacientesController