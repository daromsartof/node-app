var express = require('express');
var router = express.Router();
const { index } = require('../controllers/indexController');
const { index: indexAbout } = require('../controllers/aboutController');
const { index: indexContact } = require('../controllers/contactController');
const { index: indexPortfolio } = require('../controllers/portfolioController');
const { index: indexResume } = require('../controllers/resumeController');
const { login, fecthLogin } = require('../controllers/authController');

router.get('/', index);
router.get('/about', indexAbout);
router.get('/resume', indexContact);
router.get('/portfolio', indexPortfolio);
router.get('/contact', indexResume);
router.post('/login', fecthLogin);
router.get('/login', login);



module.exports = router;
