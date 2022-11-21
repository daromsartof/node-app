const { portfolioEntity } = require("../../models/portfolioEntity");
const { method, path } = require("../../utils/constant");
/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const index = async (req, res) => {
    portfolioEntity.find({}, async (err, docs) => {
        if (err) res.status(500).send('ERROR')
        res.render('./admin/portfolio/index', { title: 'admin potfolio', data: docs });
    });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const add = async (req, res, next) => {
    res.render('./admin/portfolio/add', { title: 'admin potfolio add', path: path });
    if (req.method == method.post) {
        const data = req.body;
        if (!data) return res.status(401).render('./admin/portfolio/add', { title: 'admin potfolio add', path: path });
        const porfolio = new portfolioEntity({
            usprTitle: data.title,
            usprDescription: data.description,
            usprImagePath: 'image url'
        })
        porfolio.save((err) => {
            if (err) return res.status(500).send('ERROR');
        })
    }
    next()
}


/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const edit = async (req, res) => {

    if (!req.params.id) res.status(404).send('portfolio not found')
    portfolioEntity.findById(req.params.id, async (err, docs) => {
        if (err) res.status(500).send('ERROR')
        res.render('./admin/portfolio/edit', { title: 'edit', data: docs, path: path });
    })

    if (req.method == method.post) {
        const data = req.body;
        if (!data) return res.render('./admin/portfolio/edit', { title: 'edit', data: docs, path: path });
        const response = await portfolioEntity.updateOne({
            _id: req.params.id
        }, {
            usprTitle: data.title,
            usprDescription: data.description,
            usprImagePath: 'image url'
        })
    }
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const remove = async (req, res) => {
    if (!req.params.id) res.status(404).send('portfolio not found')
    const response = await portfolioEntity.deleteOne({
        _id: req.params.id
    })
    if (response.deletedCount == 1) res.redirect('/admin/portfolio')
    else res.status(500).send('ERROR')
}


exports.adminPortfolioController = {
    index,
    add,
    edit,
    remove
}

