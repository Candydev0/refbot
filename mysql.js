const mysql = require('mysql');
const con = mysql.createConnection({
  host: '142.132.223.125',
  user: 'gamkartm_root',
  password: '@Bittu626',
  database: 'gamkartm_refbot'
});
var mysql_data;
con.connect(function(err) {
  if (err) {
    mysql_data = "Mysql Error On Connection Time:\n"+err; return mysql_data;
  } else {
    mysql_data = "true"; return mysql_data;
  }});
  
module.exports = con;