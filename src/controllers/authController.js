const { Psicologos } = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
const authError = require("../constants/constants")

const AuthController = {
    async login(req, res) {
        const { email, senha } = req.body;

        const psicologo = await Psicologos.findOne({
            where: {
                email,
            }
        })

        if (!psicologo || !bcrypt.compareSync(senha, psicologo.senha)) {
            return res.status(401).json(authError.authError);
        }

        const token = jwt.sign(
            {
                id: psicologo.id,
                email: psicologo.email,
                nome: psicologo.nome,
            },
            secret.key
        );

        return res.status(200).json(token);
    },
}

module.exports = AuthController;