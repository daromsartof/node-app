const skilsEntity  = require("../../models/skilsEntity");
const { method, path } = require("../../utils/constant")
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const index = async (req, res) => {
    skilsEntity.find({}, async (err, docs) => {
        if (err) res.status(500).send('ERROR')
        res.render('./admin/skils/index', { title: 'admin skils', data: docs });
    });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const renderAddSkils = async (req, res, next) => {
    res.render('./admin/skils/add', { title: 'admin potfolio add', path: path });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const addSkils = async (req, res) => {
    const data = req.body;
    if (!data) return res.redirect(300, '/');
    const porfolio = new skilsEntity({
        usprTitle: data.title,
        usprDescription: data.description,
        usprImagePath: 'image url'
    })
    porfolio.save((err) => {
        if (err) return res.status(500).send('ERROR');
        res.redirect(301, path.skils.index)
    })
}


/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const renderEditSkils = async (req, res) => {
    if (!req.params.id) res.status(404).send('skils not found')
    skilsEntity.findById(req.params.id, async (err, docs) => {
        if (err) res.status(500).send('ERROR')
        res.render('./admin/skils/edit', { title: 'edit', data: docs, path: path });
    })
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const editSkils = async (req, res) => {
    if (!req.params.id) res.status(404).send('skils not found')
    const data = req.body;
    if (!data) return res.render('./admin/skils/edit', { title: 'edit', data: docs, path: path });
    const {modifiedCount} = await skilsEntity.updateOne({
        _id: req.params.id
    }, {
        usprTitle: data.title,
        usprDescription: data.description,
        usprImagePath: 'image url'
    })
    if (modifiedCount) res.redirect(302, path.skils.index)
}


/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const remove = async (req, res) => {
    if (!req.params.id) res.status(404).send('skils not found')
    const response = await skilsEntity.deleteOne({
        _id: req.params.id
    })
    if (response.deletedCount == 1) res.redirect('/admin/skils')
    else res.status(500).send('ERROR')
}


module.exports= {
    index,
    renderAddSkils,
    addSkils,
    renderEditSkils,
    editSkils,
    remove
}

