const { validate, Joi } = require("express-validation")

module.exports = validate({
    body: Joi.object({
        data_atendimento: Joi.date().required(),
        observacao: Joi.string().required(),
        pacientes_id: Joi.number().required()
    }),
});