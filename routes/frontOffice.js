var express = require('express');
var router = express.Router();
const { aboutControllers } = require('../src/controllers/about-controller'); 
const { contactControllers } = require('../src/controllers/contact-controller');
const { portfolioControllers } = require('../src/controllers/portfolio-controller');
const { resumeControllers } = require('../src/controllers/resume-controller');

/* GET about page. */
router.get('/about', aboutControllers.index);

/* GET about page. */
router.get('/resume', resumeControllers.index);

/* GET about page. */
router.get('/portfolio', portfolioControllers.index);

/* GET about page. */
router.get('/contact', contactControllers.index);

module.exports = router;
