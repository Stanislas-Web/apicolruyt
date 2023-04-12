const router = require('express').Router();
const { createAgent, getAllAgent } = require('../controllers/agent.controller');
// const { isLoggedIn } = require("../middleware");

router.route('/agents').get(getAllAgent);
router.route('/agents').post(createAgent);

module.exports = router; 