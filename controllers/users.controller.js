const usersService = require("../services/users.service");
// const { sign } = require("jsonwebtoken");
const Cryptr = require('cryptr');
let api = exports;
exports.register = (req, res) => {
  const data = {
    userName: req.body.userName,
    password: req.body.password,
    role: req.body.role
  };
  
  usersService.register(data, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: `ERROR : ${error.sqlMessage}` });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.login = (req, res, next) => {
  // Validation area
  const data = {
    userName: req.body.userName,
    password: req.body.password,
  };
  usersService.login(data, (error, results) => {
    if (error) {
      return res.status(400).send({ success: 0, data: "Bad request" });
    }
    if(results){
      // results.password = undefined;
      // const jsontoken = sign({ username: results.userName,  role: results.role },"secreatekey123",{
      //   expiresIn:"1h"
      // });
      const cryptr = new Cryptr('myTotallySecretKey');
      const encryptedString = cryptr.encrypt(`${results[0].password}@__@${results[0].userName}@__@${results[0].role}`);
      delete results[0].password;
      delete results[0].id;
      return res.status(200).send({
        success: 1,
        data: results,
        // token:jsontoken,
        token:encryptedString
      });
    }else{
      return res.status(400).send({
        success: 1,
        data: "Invalid email or password"
      });
    }
  });
};

exports.getProductList = (req, res, next) => {
  const data = {};
  usersService.getProductList(data, (error, results) => {
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

exports.createProduct = (req, res) => {
  const data = {
    userId: req.body.userId,
    productName: req.body.productName,
  };
  
  usersService.createProduct(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: "Bad requests" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.updateProduct = (req, res) => {
  const data = {
    productId: req.body.productId,
    productName: req.body.productName,
  };
  
  usersService.updateProduct(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: "Bad requests" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};


exports.disableEnableProduct = (req, res) => {
  const data = {
    productId: req.body.productId,
    active: req.body.active,
  };
  
  usersService.disableEnableProduct(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: "Bad requests" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.deleteProduct = (req, res) => {
  const data = {
    productId: req.body.productId,
  };
  
  usersService.deleteProduct(data, (error, results) => {
    if (error) {
      console.log(error)
      return res.status(400).send({ success: 0, data: "Bad requests" });
    }
    return res.status(200).send({
      success: 1,
      data: results,
    });
  });
};

exports.checkUser = (req, res) => {
  // Validation area
  const data = {
    userName: req.userName,
    password: req.password,
  };

  usersService.login(data, (error, results) => {
    try {
      if (error) {
        return false;
      }
      if(results){
        return results;
      }else{
        return false;
      }
    } catch (error) {
      console.log(error);
      return false;
    }  
  });
};

