const jwt = require('jsonwebtoken');

const verifyUser = async (req,res,next)=>{
    const token = req.headers["x-access-token"]
    console.log(req.body,'<><><><><><><><><><><><><><><><>');

    if(!token){
        res.status(401).send({"status" : "failed" ,"message" : "You Need Token" })
    }else{
         jwt.verify(token,process.env.JWT_SECREAT_KEY,(err,decoded)=>{
            if(err){
                console.log(err);
                res.json({auth:false,status:"failed",message:"authentication failed"})
            }else{
                console.log(decoded.userId);
                req.userId = decoded.userId;
                next();
            }
         })
    }

}

module.exports = {
    verifyUser,
};