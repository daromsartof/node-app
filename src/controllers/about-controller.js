/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
 const index = async(req, res) => {
    res.render('./about/index', { title: 'about' });
}


exports.aboutControllers = {
    index
}

