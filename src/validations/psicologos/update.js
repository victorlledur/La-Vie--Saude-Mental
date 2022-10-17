const { validate, Joi } = require("express-validation")

module.exports = validate({
    params: Joi.object({
        id: Joi.number().required(),
    }),
    body: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(6).required(),
        apresentacao: Joi.string().required()
    }),
});