/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const login = async(req, res) => {
   res.render('./auth/index', { title: 'login' });
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
    login
}

