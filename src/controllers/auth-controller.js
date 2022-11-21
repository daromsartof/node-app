const { userEntity } = require("../models/userEntity");
const { method } = require("../utils/constant");
const bcrypt = require('bcrypt');

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
    console.log(data);
    userEntity.findOne({
        userName: data.userName
    }, async (err, docs) => {
        if (docs) {
            bcrypt.compare(data.password, docs.password, (err, result) => {
                console.log(result);
                result ? res.redirect(301, `/admin`) : res.status(401).end();
            });
        } else {
            console.log('ici');
            res.status(401).end();
        }
    })
}

exports.AuthControllers = {
    login,
    fecthLogin
}

