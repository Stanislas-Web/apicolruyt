const router = require('express').Router();
const { createRole, getAllRole } = require('../controllers/role.controller');
// const { isLoggedIn } = require("../middleware");

router.route('/roles').get(getAllRole);
router.route('/roles').post(createRole);

module.exports = router; 