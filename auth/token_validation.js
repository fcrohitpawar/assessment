const { verify } = require("jsonwebtoken");
module.exports={
    checkToken:(req, res, next) => {
        let token = req.get("authorization");
        if(token){
            // berror will start 7 index
            token = token.slice(7);
            verify(token,"secreatekey123",(error ,decoded) => {
                if(error){
                    res.json({
                        success:0,
                        message:"Invalid token"
                    });
                }else{
                    next();
                }
            });
        }else{
            res.json({
                success:0,
                message:"Access denied! unauthorized user"
            });
        }
    }
};