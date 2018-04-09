
exports.createAgent = (req,res) =>{
    if(!req.body.name) return res.status(400).send({err:"No name provided"});
    if(!req.body.type) return res.status(400).send({err:"No name provided"});
    /** TODO Add logic to POST on blockchain **/
};
exports.getAgents = (req,res) =>{
    /** TODO Add logic to POST on blockchain **/
};