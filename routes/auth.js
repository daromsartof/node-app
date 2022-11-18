var express = require('express');
var router = express.Router();
const {AuthControllers} = require('../src/controllers/auth-controller'); 
/* POST login page. */
router.post('/login', function (req, res, next) {
    res.send('post login')
});

/* GET login page. */
router.get('/login', AuthControllers.login);

/* POST register page. */
router.post('/register', function (req, res, next) {
    res.send('post register')
});


/* GET register page. */
router.get('/register', AuthControllers.register);




module.exports = router;
