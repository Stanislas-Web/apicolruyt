const router = require('express').Router();
const { createPrestation, getAllPrestation } = require('../controllers/prestation.controller');
// const { isLoggedIn } = require("../middleware");

router.route('/prestations').get(getAllPrestation);
router.route('/prestations').post(createPrestation);

module.exports = router; 