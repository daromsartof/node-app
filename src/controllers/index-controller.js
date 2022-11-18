/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
 const index = async(req, res) => {
    res.render('index', { title: 'Express' });
}


exports.indexControllers = {
    index
}

