const router = require('express').Router();
const { createSite, getAllSite } = require('../controllers/site.controller');
// const { isLoggedIn } = require("../middleware");

router.route('/sites').get(getAllSite);
router.route('/sites').post(createSite);

module.exports = router; 