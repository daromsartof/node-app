var express = require('express');
const { index:indexAdmin } = require('../controllers/admin/indexController');

const { index:indexCivils, updateCivil } = require('../controllers/admin/civilsConstroller');
const {
    index,
    renderAddPortfolio,
    addPortfolio,
    renderEditPortfolio,
    editPortfolio,
    remove
} = require('../controllers/admin/portfolioController');

const { 
    index:indexSkils,
    renderAddSkils, 
    addSkils,
    renderEditSkils,
    editSkils,
    remove:rmSkils 
} = require('../controllers/admin/skilsController');

var router = express.Router();
router.get('/', indexAdmin);


router.get('/portfolio', index);
router.get('/portfolio/add', renderAddPortfolio);
router.post('/portfolio/add' , addPortfolio);
router.get('/portfolio/edit/:id', renderEditPortfolio);
router.post('/portfolio/edit/:id', editPortfolio);
router.get('/portfolio/delete/:id', remove);


router.get('/skils', indexSkils);
router.get('/skils/add', renderAddSkils);
router.post('/skils/add' , addSkils);
router.get('/skils/edit/:id', renderEditSkils);
router.post('/skils/edit/:id', editSkils);
router.get('/skils/delete/:id', rmSkils);

router.get('/civils', indexCivils);
router.post('/civils', updateCivil);

module.exports = router;