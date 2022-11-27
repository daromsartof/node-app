/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
 const index = async(req, res) => {
    res.render('./resume/index', { title: 'resume' });
}


module.exports = {
    index
}

