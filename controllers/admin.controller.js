const adminService = require("../services/admin.service");
const { sign } = require("jsonwebtoken");

exports.deleteUser = (req , res ) => {
    const data = {
        userId : req.body.userId
    }

    adminService.delete(data, (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).send({ success: 0, data: "Bad request" });
        }
        return res.status(200).send({
          success: 1,
          data: results,
        });
    });
};

exports.updateUser = (req , res ) => {
    const data = {
        userId : req.body.userId,
        userName : req.body.userName,
        password : req.body.password
    }

    adminService.updateUser(data, (error, results) => {
        if (error) {
          console.log(error);
          return res.status(400).send({ success: 0, data: "Bad request" });
        }
        return res.status(200).send({
          success: 1,
          data: results,
        });
    });
};