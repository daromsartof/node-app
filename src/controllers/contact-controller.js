/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
 const index = async(req, res) => {
    res.render('./contact/index', { title: 'contact' });
}


module.exports = {
    index
}

