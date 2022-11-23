/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
 const index = async(req, res) => {
    res.render('index', { title: 'Express' });
}


module.exports = {
    index
}

