var express = require('express');
const { indexControllers } = require('../src/controllers/index-controller');
var router = express.Router();

/* GET home page. */
router.get('/', indexControllers.index);

module.exports = router;
