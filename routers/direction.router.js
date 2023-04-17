const router = require('express').Router();
const { createDirection, getAllDirection } = require('../controllers/direction.controller');
// const { isLoggedIn } = require("../middleware");

router.route('/directions').get(getAllDirection);
router.route('/directions').post(createDirection);

module.exports = router; 