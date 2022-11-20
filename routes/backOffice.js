var express = require('express');
const { adminController } = require('../src/controllers/admin/index-controller');
const { adminPortfolioController } = require('../src/controllers/admin/portfolio-controller');
var router = express.Router();

/* GET dasboard page. */
router.get('/', adminController.index);

/* GET admin portfolio page. */
router.get('/portfolio', adminPortfolioController.index);

/* GET add portfolio page. */
router.all('/portfolio/add', adminPortfolioController.add)
    

/* GET edit portfolio page. */
router.all('/portfolio/edit/:id', adminPortfolioController.edit)

router.get('/portfolio/delete/:id', adminPortfolioController.remove);


// /* GET about page. */
// router.get('/portfolio', portfolioControllers.index);

// /* GET about page. */
// router.get('/contact', contactControllers.index);

module.exports = router;