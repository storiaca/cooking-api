import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: process.env.USER_DB,
  database: "cooking-db",
  password: process.env.PASSWORD_DB,
});

module.exports = pool.promise();
