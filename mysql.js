const mysql = require('mysql');
var con = mysql.createConnection({
    	host     : process.env.MYSQL_ADDON_HOST,
    	database : process.env.MYSQL_ADDON_DB,
    	user     : process.env.MYSQL_ADDON_USER,
    	password : process.env.MYSQL_ADDON_PASSWORD
  });
var mysql_data;
con.connect(function(err) {
  if (err) {
    mysql_data = "Mysql Error On Connection Time:\n"+err; return mysql_data;
  } else {
    mysql_data = "true"; return mysql_data;
  }});
  
module.exports = con;
