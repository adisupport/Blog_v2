const jwt = require('jsonwebtoken')
function tokenCheck(req,res,next){
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(200).json({success:false, message: "Error!Token was not provided."});
    }
    req.token = jwt.verify(token,process.env.JWT_KEY);
    next();
}


module.exports = tokenCheck;