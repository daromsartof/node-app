var express = require('express');
var router = express.Router();
const { index } = require('../controllers/index-controller');
const { index: indexAbout } = require('../controllers/about-controller');
const { index: indexContact } = require('../controllers/contact-controller');
const { index: indexPortfolio } = require('../controllers/portfolio-controller');
const { index: indexResume } = require('../controllers/resume-controller');
const { login, fecthLogin } = require('../controllers/auth-controller');

router.get('/', index);
router.get('/about', indexAbout);
router.get('/resume', indexContact);
router.get('/portfolio', indexPortfolio);
router.get('/contact', indexResume);
router.post('/login', fecthLogin);
router.get('/login', login);



module.exports = router;
