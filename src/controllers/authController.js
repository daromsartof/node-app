const { method } = require("../utils/constant");
const bcrypt = require('bcrypt');
const userEntity = require("../models/userEntity");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const login = async (req, res) => {
    res.render('./auth/index', { title: 'login' });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const fecthLogin = async (req, res) => {
    const data = req.body
    if (!data) res.status(401).end()
    userEntity.findOne({
        userName: data.userName
    }, async (err, docs) => {
        if (docs) {
            bcrypt.compare(data.password, docs.password, (err, result) => {
                console.log(result);
                result ? res.redirect(301, `/admin`) : res.status(401).end();
            });
        } else {
            res.status(401).end();
        }
    })
}

module.exports = {
    login,
    fecthLogin
}

