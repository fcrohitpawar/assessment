const db = require("../config/db.config");

exports.delete = (data, callback) => {
  db.query(
    `DELETE FROM users WHERE id = ?`,
    [data.userId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, `deleted successfully`);
    }
  );
};

exports.updateUser = (data, callback) => {
  db.query(
    `Update users SET userName = ?,password=? WHERE id = ?`,
    [data.userName,data.password,data.userId],
    (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error);
      }
      return callback(null, `updated successfully`);
    }
  );
};
