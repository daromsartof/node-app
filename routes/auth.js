var express = require('express');
var router = express.Router();
const {AuthControllers} = require('../src/controllers/auth-controller'); 
/* POST login page. */
router.post('/login', AuthControllers.fecthLogin);

/* GET login page. */
router.get('/login', AuthControllers.login);


module.exports = router;
