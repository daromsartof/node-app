const { method } = require("../utils/constant");

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const login = async(req, res) => {
    //if (req.method == method.get) {
        res.render('./auth/index', { title: 'login' });     
   // }
    // res.json(JSON.stringify(req.body));
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const fecthLogin = async(req, res) => {
    res.json(JSON.stringify(req.body));
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const register = async(req, res) => {
    res.render('./auth/resister', { title: 'register' });
}

exports.AuthControllers = {
    register,
    login ,
    fecthLogin
}

