var express = require('express');
const { index:indexAdmin } = require('../controllers/admin/index-controller');
const {
    index,
    renderAddPortfolio,
    addPortfolio,
    renderEditPortfolio,
    editPortfolio,
    remove
} = require('../controllers/admin/portfolio-controller');
var router = express.Router();
router.get('/', indexAdmin);
router.get('/portfolio', index);
router.get('/portfolio/add', renderAddPortfolio);
router.post('/portfolio/add' , addPortfolio);
router.get('/portfolio/edit/:id', renderEditPortfolio);
router.post('/portfolio/edit/:id', editPortfolio);
router.get('/portfolio/delete/:id', remove);
module.exports = router;