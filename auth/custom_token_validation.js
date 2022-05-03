const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');
const usersController = require("../controllers/users.controller");

// app.use((req, res, next) => res.status(300).json(err.message));

class Authentication{
    static ensureRole(role){
        return async (req,res,next) => {
            try {
                const token = req.get("authorization");
                if(token){
                    const decryptedString = cryptr.decrypt(token);
                    const user_data = decryptedString.split("@__@");
                    console.log(`User token url : ${user_data[2]}`)
                    console.log(`permission : ${role}`)
                    if(user_data[2] != role){
                        return res.status(500).send({ success: 0, data: "Access denied! unauthorized user" });    
                    }
                    var data = {
                        password:user_data[0],
                        userName:user_data[1],
                    };

                    const checkuser = usersController.checkUser(data, (error, results) => {
                        if (error) {
                          console.log(error);
                            return res.status(400).send({ success: 0, data: "Bad requests" });
                        }
                        return results;
                    });
                    
                    return next();
                }else{
                    return res.status(500).send({ success: 0, data: "Access denied! unauthorized user 1 " });
                }
            } catch (error) {
                console.log(error)
                return res.status(500).send({ success: 0, data: "Access denied! unauthorized user 2" });
            }
        };
    }
}

module.exports = Authentication;