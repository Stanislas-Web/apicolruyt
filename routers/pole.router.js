const router = require('express').Router();
const { createPole, getAllPole } = require('../controllers/pole.controller');
// const { isLoggedIn } = require("../middleware");

router.route('/poles').get(getAllPole);
router.route('/poles').post(createPole);

module.exports = router; 