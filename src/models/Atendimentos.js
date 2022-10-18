const db = require("../database");
const { DataTypes } = require("sequelize");

const Atendimentos = db.define(
    "Atendimentos", 
    {    
    data_atendimento: {
        type: DataTypes.DATE,
    },
    observacao: {
        type: DataTypes.STRING,
    },    
    psicologos_id: {
        type: DataTypes.INTEGER,
        
    },
    pacientes_id: {
        type: DataTypes.INTEGER,
        
    },
},
{
    tableName: "atendimentos",
    timestamps: false,

})
Atendimentos.removeAttribute('id');
module.exports = Atendimentos;