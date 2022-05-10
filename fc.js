const mysql = require("./mysql.js");

const setnew = (msg, refby, refst)=> {
  var sql = `INSERT INTO users(id, fname, lname, username, balance, refer_count, refer_by, total_earned, refer_status) VALUES (${msg.message.chat.id},'${msg.message.chat.first_name}','${msg.message.chat.last_name}','${msg.message.chat.username}',0,0,${refby},0,${refst})`;
  mysql.query(sql, function (err, result, fields) {
  if (err) throw err;
  });
};

module.exports = {setnew};