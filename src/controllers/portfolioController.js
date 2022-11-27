/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
 const index = async(req, res) => {
    res.render('./portfolio/index', { title: 'portfolio' });
}


module.exports = {
    index
}

