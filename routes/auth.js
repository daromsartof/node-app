var express = require('express');
var router = express.Router();

/* POST login page. */
router.post('/login', function (req, res, next) {
    res.send('post login')
});

/* GET login page. */
router.get('/login', function (req, res, next) {
    res.render('./auth/index', { title: 'login' });
});

/* POST register page. */
router.post('/register', function (req, res, next) {
    res.send('post register')
});


/* GET register page. */
router.get('/register', function (req, res, next) {
    res.render('./auth/resister', { title: 'resister' });
});




module.exports = router;
