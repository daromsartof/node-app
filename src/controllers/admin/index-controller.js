/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
 const index = async(req, res) => {
    res.render('./admin/index', { title: 'dasbord' });
}


exports.adminController = {
    index
}

