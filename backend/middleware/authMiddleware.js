const requireLogin = (req,res,next)=>{
    if (req.body && req.body.user_id){
        return next();
    }else{
        return res.status(401).send({err: 'Unauthorized'});
    }
}

module.exports = requireLogin