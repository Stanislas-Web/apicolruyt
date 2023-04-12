const router = require('express').Router();
const { createRole, getAllRole } = require('../controllers/role.controller');
// const { isLoggedIn } = require("../middleware");

router.route('/roles').get(createRole);
router.route('/roles').post(getAllRole);

module.exports = router; 