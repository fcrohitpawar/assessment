const { createPool } = require ("mysql");
/**  Connection pool creation - START */
const db = createPool({
    port:3306,
    host:"",
    user:"",
    password:"",
    database:"assignment",
    connectionLimit:10
});
/**  Connection pool creation - END */

module.exports = db;