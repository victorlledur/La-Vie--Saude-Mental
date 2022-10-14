const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

Atendimentos.hasOne(Psicologos, {
    foreignKey: "psicologos_id"
});

Psicologos.hasMany(Atendimentos);

Atendimentos.hasOne(Pacientes, {
    foreignKey: "pacientes_id"
});

Pacientes.hasMany(Atendimentos);

module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos
}