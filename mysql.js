const mysql = require('mysql');
var con = mysql.createConnection({
    	host     : 'b3rutgfiunn28bzruthy-mysql.services.clever-cloud.com',
    	database : 'b3rutgfiunn28bzruthy',
    	user     :'ufac4nge84ipdz1k',
    	password : 'dtchKN6BAV46GktJ1lZ'
  });
var mysql_data;
con.connect(function(err) {
  if (err) {
    mysql_data = "Mysql Error On Connection Time:\n"+err; return mysql_data;
  } else {
    mysql_data = "true"; return mysql_data;
  }});
  
module.exports = con;
