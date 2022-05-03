const db = require("../config/db.config");

exports.register = (data, callback) => {
  if(data.role == 'admin'){
    db.query(
      `SELECT COUNT(*) as count FROM users WHERE role='admin'`,
      [],
      (error, results, fields) => {
        if (error) {
          console.log(error)
          return callback(error);
        }
        if(results[0].count == 0){
          db.query(
            `INSERT INTO users ( userName, password, role) VALUES (?,?,?)`,
            [data.userName, data.password, data.role],
            (error, results, fields) => {
              if (error) {
                console.log(error)
                return callback(error);
              }
              return callback(null, `register successfully`);
            }
          );
        }else{
          return callback(null, `you can create only one admin`);
        }
      }
    );
  }else{
    db.query(
      `INSERT INTO users ( userName, password, role) VALUES (?,?,?)`,
      [data.userName, data.password, data.role],
      (error, results, fields) => {
        if (error) {
          console.log(error)
          return callback(error);
        }
        return callback(null, `register successfully`);
      }
    );
  }
};

const checkIsAdmin = (data, callback) => {
  db.query(
    `SELECT COUNT(*) as count FROM users WHERE role='admin' `,
    [],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        return callback(error);
      }
      console.log(results);
      return callback(null, `register successfully`);
    }
  );
};

exports.login = (data, callback) => {
  db.query(
    `SELECT id,userName,password,role FROM users WHERE userName = ? AND password = ?`,
    [data.userName, data.password],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      if (results.length > 0) {
        return callback(null, results);
      } else {
        return callback("Invalid credentials");
      }
    }
  );
};

exports.getProductList = (data, callback) => {
  db.query(
    `SELECT * FROM product WHERE active = 1`,
    [],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.createProduct = (data, callback) => {
  db.query(
    `INSERT INTO product ( userId, productName) VALUES (?,?)`,
    [data.userId, data.productName],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        return callback(error);
      }
      return callback(null, `product created`);
    }
  );
};

exports.updateProduct = (data, callback) => {
  db.query(
    `Update product SET productName = ? WHERE id = ?`,
    [data.productName,data.productId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, `updated successfully`);
    }
  );
};

exports.disableEnableProduct = (data, callback) => {
  db.query(
    `Update product SET active = ? WHERE id = ?`,
    [data.active,data.productId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, `updated successfully`);
    }
  );
};

exports.deleteProduct = (data, callback) => {
  db.query(
    `DELETE FROM product where id = ?`,
    [data.productId],
    (error, results, fields) => {
      if (error) {
        console.log(error)
        return callback(error);
      }
      return callback(null, `product created`);
    }
  );
};