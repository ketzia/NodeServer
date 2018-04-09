
let agent   = require('./routes/agent.routes');
let api_routes = function(app){
    app.use('/api/', agent);

};
module.exports = api_routes;