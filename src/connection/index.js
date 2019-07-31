const mysql = require("mysql");

const conn = mysql.createConnection({
  user: "zuhrisql",
  password: "Mysql123",
  host: "db4free.net",
  database: "zuhridb",
  port: 3306
});
module.exports = conn;
