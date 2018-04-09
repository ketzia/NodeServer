let router  =   require('express').Router();
const jsonParser = require('body-parser').json();
let AgentController = require('../controllers/agent.controller.js');

router.route('/agent')
    .post(jsonParser,AgentController.createAgent);
router.route('/agents')
    .get(jsonParser,AgentController.getAgents);
module.exports = router;
