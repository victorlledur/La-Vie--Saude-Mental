const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

Atendimentos.hasOne(Psicologos, {
    foreignKey: "psicologos_id"
});

Psicologos.hasMany(Atendimentos, {
    foreignKey: "psicologos_id"
});

Atendimentos.hasOne(Pacientes, {
    foreignKey: "pacientes_id"
});

Pacientes.hasMany(Atendimentos, {
    foreignKey: "pacientes_id"
});

module.exports = {
    Atendimentos,
    Pacientes,
    Psicologos
}