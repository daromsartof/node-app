const  portfolioEntity  = require("../../models/portfolioEntity");
const { method, path } = require("../../utils/constant")
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
const renderAddPortfolio = async (req, res, next) => {
    res.render('./admin/portfolio/add', { title: 'admin potfolio add', path: path });
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const addPortfolio = async (req, res) => {
    const data = req.body;
    if (!data) return res.redirect(300, '/');
    const porfolio = new portfolioEntity({
        usprTitle: data.title,
        usprDescription: data.description,
        usprImagePath: 'image url'
    })
    porfolio.save((err) => {
        if (err) return res.status(500).send('ERROR');
        res.redirect(301, path.portfolio.index)
    })
}


/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const renderEditPortfolio = async (req, res) => {
    if (!req.params.id) res.status(404).send('portfolio not found')
    portfolioEntity.findById(req.params.id, async (err, docs) => {
        if (err) res.status(500).send('ERROR')
        res.render('./admin/portfolio/edit', { title: 'edit', data: docs, path: path });
    })
}

/**
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
const editPortfolio = async (req, res) => {
    if (!req.params.id) res.status(404).send('portfolio not found')
    const data = req.body;
    if (!data) return res.render('./admin/portfolio/edit', { title: 'edit', data: docs, path: path });
    const {modifiedCount} = await portfolioEntity.updateOne({
        _id: req.params.id
    }, {
        usprTitle: data.title,
        usprDescription: data.description,
        usprImagePath: 'image url'
    })
    if (modifiedCount) res.redirect(302, path.portfolio.index)
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


module.exports= {
    index,
    renderAddPortfolio,
    addPortfolio,
    renderEditPortfolio,
    editPortfolio,
    remove
}

