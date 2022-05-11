const express = require('express');
const app = express();
const fc = require("./fc.js");
const mysql = require("./mysql.js");

const {
  Telegraf,
  session,
  Markup
} = require('telegraf');
const url = "https://gamkart.me/refbot/";
const bot = new Telegraf("5332039069:AAHhFF08UCWescUeefqLWvRMYGYYuY1Wt9k");
bot.use(session());
bot.start((msg) => {
  msg.session = { join: 0 };
  var cmdstart = msg.message.text.split(' ');
  if (cmdstart.length == 2) {
    var sql = `SELECT * FROM users WHERE id = ${msg.message.chat.id}`;
    mysql.query(sql, function (err, result, fields) {
      if (result.length != 1) {

        var sql = `SELECT * FROM users WHERE id = ${cmdstart[1]}`;
        mysql.query(sql, function (err, result1, fields) {
          if (result1.length != 0) {
            fc.setnew(msg, cmdstart[1], 0);
var sql = `UPDATE users SET refer_count = '${result1[0].refer_count+1}' WHERE users.id = ${cmdstart[1]}`;
mysql.query(sql, function (err, result1, fields) {
  
});
msg.replyWithHTML(`🔰<b> Welcome In Our Premium Account Giveaway Bot
--------------------------------------------------------
📑Join Our Payment Proof Channel:</b>
@demoproof
🎉<b>Join Our Giveaway Channel :</b>
@demochannale
--------------------------------------------------------
🛃 <b>Before Using This Bot, After completing all tasks Click on ✅ Check!</b>`, Markup.inlineKeyboard([
                Markup.button.callback('✅ Check', 'check')
              ]));


          } else {
            fc.setnew(msg,
              0,
              1);
msg.replyWithHTML(`🔰<b> Welcome In Our Premium Account Giveaway Bot

--------------------------------------------------------
📑Join Our Payment Proof Channel:</b>
@demoproof
🎉<b>Join Our Giveaway Channel :</b>
@demochannale
--------------------------------------------------------
🛃 <b>Before Using This Bot, After completing all tasks Click on ✅ Check!</b>`, Markup.inlineKeyboard([
                Markup.button.callback('✅ Check', 'check')
              ]));
          }
        });

      } else {
msg.replyWithHTML(`🔰<b> Welcome In Our Premium Account Giveaway Bot
--------------------------------------------------------
📑Join Our Payment Proof Channel:</b>
@demoproof
🎉<b>Join Our Giveaway Channel :</b>
@demochannale
--------------------------------------------------------
🛃 <b>Before Using This Bot, After completing all tasks Click on ✅ Check!</b>`, Markup.inlineKeyboard([
            Markup.button.callback('✅ Check', 'check')
          ]));
      }
    });
  } else {
    var sql = `SELECT * FROM users WHERE id = ${msg.message.chat.id}`;
    mysql.query(sql, function (err, result, fields) {
      if (result.length != 1) {
msg.replyWithHTML(`🔰<b> Welcome In Our Premium Account Giveaway Bot
--------------------------------------------------------
📑Join Our Payment Proof Channel:</b>
@demoproof
🎉<b>Join Our Giveaway Channel :</b>
@demochannale
--------------------------------------------------------
🛃 <b>Before Using This Bot, After completing all tasks Click on ✅ Check!</b>`, Markup.inlineKeyboard([
            Markup.button.callback('✅ Check', 'check')
          ]));
        fc.setnew(msg, 0, 1);
      } else {
msg.replyWithHTML(`🔰<b> Welcome In Our Premium Account Giveaway Bot
--------------------------------------------------------
📑Join Our Payment Proof Channel:</b>
@demoproof
🎉<b>Join Our Giveaway Channel :</b>
@demochannale
--------------------------------------------------------
🛃 <b>Before Using This Bot, After completing all tasks Click on ✅ Check!</b>`, Markup.inlineKeyboard([
            Markup.button.callback('✅ Check', 'check')
          ]));
      }
    });
  }});
bot.action('check', (msg) => {
  const jet=async ()=>{
  const channel = ["@demoproof","@demochannale"]; 
  let nu = 0;
let i = 0; 
let len = channel.length;
let text = "";
var sql = `SELECT * FROM users WHERE id = ${msg.update.callback_query.message.chat.id}`;
var refst;
    mysql.query(sql, function (err, result, fields) {
      refst = result[0].refer_status;
      refby = result[0].refer_by;
    });
while (i < len) {
  var stst = await msg.telegram.getChatMember(channel[i],msg.update.callback_query.message.chat.id);
  if(stst.status=='creator'||stst.status=='member'||stst.status=='administrator'){
    nu++;}
    
    if(nu==len){
      if(refst!=1){
        sql = `UPDATE users SET refer_status = '1' WHERE users.id = ${msg.update.callback_query.message.chat.id}`;
       // msg.reply(sql);
        mysql.query(sql, function (err, result) {
      sql = `SELECT * FROM users WHERE id=${refby}`;
      mysql.query(sql, function (err, result, fields) {
       sql = `UPDATE users SET balance = ${result[0].balance+1} WHERE users.id = ${refby}`;
       mysql.query(sql, function (err, result, fields) {
         msg.telegram.sendMessage(refby,`🎊 <b>+1 From Refer System
<a href="tg://user?id=${msg.update.callback_query.message.chat.id}">${msg.update.callback_query.message.chat.id}</a> Completed All the task </b>`,{parse_mode: 'HTML'});
       });
    });
    });
      }
      msg.reply(
    '🏠 Main Menu',
    Markup.keyboard([
      ['💰 Balance', '👫Referral'],
      ['📥Withdraw'],
      ['📢 Giveaway', '📞Support']
    ])
    .resize()
  );
  
    }else{
      if(i==1){
      msg.reply("❌ Must join all channels",{reply_markup: {remove_keyboard: true}});
      msg.answerCbQuery("❌ Must join all channels");}
    }
  
  i++;
} };
jet();
   
});
bot.hears('📞Support', (msg)=> {
  msg.reply(`⁉️We are Always Ready to Support You .
    Contact us Here @Natproof_bot`)});
bot.hears('📢 Giveaway', msg => msg.reply('Join For Giveaway @demochannale'));
bot.hears('💰 Balance', (msg)=> {
  var sql = `SELECT * FROM users WHERE id = ${msg.message.chat.id}`;

  mysql.query(sql,
    function (err, result, fields) {

      msg.replyWithHTML(`<b>
💰 Balance : ${result[0].balance} Point

⚜️Refer And Earn More</b>`);

    });

});
bot.hears('👫Referral', (msg)=> {
  var sql = `SELECT * FROM users WHERE id = ${msg.message.chat.id}`;

  mysql.query(sql,
    function (err, result, fields) {
      msg.replyWithHTML(`<b>💰 Invite Users And Earn 1 POINT

💹 Your Link :</b> https://t.me/Nathan_Netflix_Giveaway_Bot?start=${
  msg.message.chat.id}
  
🎯<b> You Invited :</b> ${result[0].refer_count} <b>Users</b>`);
    });
});
bot.hears('📥Withdraw', (msg)=> {
   var sql = `SELECT * FROM users WHERE id = ${msg.message.chat.id}`;

  mysql.query(sql,
    function (err, result, fields) {
  msg.replyWithHTML(`📨<b>You Can Exchange Your Point to Many Premium Accounts.
  
💰Your Balance</b> ${result[0].balance} <b>Points.

🔄Exchange Point to ~
👉Netflix Account [ 5 Point ].
👉Hotstar Account [ 10 Points ].</b>`,Markup.inlineKeyboard([[
      Markup.button.callback('Netflix [ 5 Point ]', 'netflix')],[
      Markup.button.callback('Hotstar [ 10 Point ]', 'hotstar')
    ]]));
    });
    }
);
bot.action('netflix', (msg) => {
  msg.editMessageText(`🎁For Exchange Points to Netflix Account :-
🖲Please Click on Comfirm`,Markup.inlineKeyboard([
      Markup.button.callback('Comfirm', 'com_net'),
      Markup.button.callback('Cancel', 'back')
    ]));
});
bot.action('com_net', (msg) => {
    var sql = `SELECT * FROM users WHERE id = ${msg.update.callback_query.message.chat.id}`;

  mysql.query(sql,
    function (err, result12, fields) {
      if(result12[0].balance>=5){
    var sql = `SELECT * FROM acc WHERE type="netflix" and status=0`;
  mysql.query(sql,
    function (err, result, fields) {
      if(result.length!=0){
        msg.answerCbQuery("🔄 Order Processing");
        msg.editMessageText("🔄 Order Processing",{
  parse_mode: 'HTML'
});
setTimeout(() => {
msg.editMessageText(`⚙ <b>Generating Account Log... 
⏰ Wait For </b>3 <b>second ....</b>`,
{parse_mode: 'HTML'});},1000);
setTimeout(() => {
msg.editMessageText(`⚙ <b>Generating Account Log... 
⏰ Wait For </b>2 <b>second ....</b>`,
{parse_mode: 'HTML'});},2000);
setTimeout(() => {
msg.editMessageText(`⚙ <b>Generating Account Log... 
⏰ Wait For </b>1 <b>second ....</b>`,
{parse_mode: 'HTML'});},3000);
setTimeout(() => {
msg.editMessageText(`⚙ <b>Generating Account Log... 
⏰ Wait For </b>0 <b>second ....</b>`,
{parse_mode: 'HTML'});},4000);
setTimeout(() => {
msg.editMessageText(`🛒<b> Order Successfully Completed..
📧 Account Details:-
📧 Email :-</b> <code>${result[0].email}</code>
🔐<b> Password :-</b> <code>${result[0].pass}</code>
🎊Thanks For Using Our Bot🎊
~Send Screenshot To @Natproof_bot`,
{parse_mode: 'HTML'});
  var sql = `UPDATE acc SET Id = '${msg.update.callback_query.message.chat.id}', status = '1' WHERE acc.uid = ${result[0].uid}`;
  mysql.query(sql,
    function (err, result) {
      var sql = `UPDATE users SET balance = '${result12[0].balance-5}' WHERE users.id = ${msg.update.callback_query.message.chat.id};`;
      mysql.query(sql,
    function (err, result) {
      msg.reply(err);
    });
    });
},4400);
      }else{
        msg.editMessageText(`🛒<b>Sorry , This Product is out of stock .</b>
🪄<i> We will Inform You when it cames back.</i>`,{
  parse_mode: 'HTML'
});
      }
    });
      }else{
        msg.answerCbQuery("❌ Sorry To Say You have not enough Points to Exchange ...",{show_alert:false});
        msg.editMessageText(`🚫 You Need 5 Points For Exchanging .
👬 Refer More to Earn .`,Markup.inlineKeyboard([
      Markup.button.callback('< Back', 'back')
    ]));
      }
    });
});
bot.action('back', (msg)=> {
   var sql = `SELECT * FROM users WHERE id = ${msg.update.callback_query.message.chat.id}`;

  mysql.query(sql,
    function (err, result, fields) {
  msg.editMessageText(`📨<b>You Can Exchange Your Point to Many Premium Accounts.
  
💰Your Balance</b> ${result[0].balance} <b>Points.

🔄Exchange Point to ~
👉Netflix Account [ 5 Point ].
👉Hotstar Account [ 10 Points ].</b>`,{
  parse_mode: 'HTML',
  ...Markup.inlineKeyboard([[
      Markup.button.callback('Netflix [ 5 Point ]', 'netflix')],[
      Markup.button.callback('Hotstar [ 10 Points ]', 'hotstar')
    ]])});
    });
    }
);
bot.action('hotstar', (msg) => {
  msg.editMessageText(`🎁For Exchange Points to Hotstar Account :-
🖲Please Click on Comfirm`,Markup.inlineKeyboard([
      Markup.button.callback('Comfirm', 'com_hot'),
      Markup.button.callback('Cancel', 'back')
    ]));
});
bot.action('com_hot', (msg) => {
    var sql = `SELECT * FROM users WHERE id = ${msg.update.callback_query.message.chat.id}`;

  mysql.query(sql,
    function (err, result12, fields) {
      if(result12[0].balance>=10){
    var sql = `SELECT * FROM acc WHERE type="hotstar" and status=0`;
  mysql.query(sql,
    function (err, result, fields) {
      if(result.length!=0){
        msg.answerCbQuery("🔄 Order Processing");
        msg.editMessageText("🔄 Order Processing",{
  parse_mode: 'HTML'
});
setTimeout(() => {
msg.editMessageText(`⚙ <b>Generating Account Log... 
⏰ Wait For </b>3 <b>second ....</b>`,
{parse_mode: 'HTML'});},1000);
setTimeout(() => {
msg.editMessageText(`⚙ <b>Generating Account Log... 
⏰ Wait For </b>2 <b>second ....</b>`,
{parse_mode: 'HTML'});},2000);
setTimeout(() => {
msg.editMessageText(`⚙ <b>Generating Account Log... 
⏰ Wait For </b>1 <b>second ....</b>`,
{parse_mode: 'HTML'});},3000);
setTimeout(() => {
msg.editMessageText(`⚙ <b>Generating Account Log... 
⏰ Wait For </b>0 <b>second ....</b>`,
{parse_mode: 'HTML'});},4000);
setTimeout(() => {
msg.editMessageText(`🛒<b> Order Successfully Completed..
📧 Account Details:-
📧 Email :-</b> <code>${result[0].email}</code>
🔐<b> Password :-</b> <code>${result[0].pass}</code>
🎊Thanks For Using Our Bot🎊
~Send Screenshot To @Natproof_bot`,
{parse_mode: 'HTML'});
  var sql = `UPDATE acc SET Id = '${msg.update.callback_query.message.chat.id}', status = '1' WHERE acc.uid = ${result[0].uid}`;
  mysql.query(sql,
    function (err, result) {
      var sql = `UPDATE users SET balance = '${result12[0].balance-10}' WHERE users.id = ${msg.update.callback_query.message.chat.id};`;
      mysql.query(sql,
    function (err, result) {});});
},4400);
      }else{
        msg.editMessageText(`🛒<b>Sorry , This Product is out of stock .</b>
🪄<i> We will Inform You when it cames back.</i>`,{
  parse_mode: 'HTML'
});
      }
    });
      }else{
        msg.answerCbQuery("❌ Sorry To Say You have not enough Points to Exchange ...",{show_alert:false});
        msg.editMessageText(`🚫 You Need 10 Points For Exchanging .
👬 Refer More to Earn .`,Markup.inlineKeyboard([
      Markup.button.callback('< Back', 'back')
    ]));
      }
    });
});
bot.command('/netflix', (msg) =>{ 
  if(msg.message.chat.id==1890681503){
  var myArray = msg.message.text.split(" ");
  //msg.reply(myArray);
  if(myArray.length==3){
    sql = `INSERT INTO acc (uid, email, pass, Id, type, status) VALUES (NULL, '${myArray[1]}', '${myArray[2]}', '0', 'netflix', '0');`
    mysql.query(sql,
    function (err, result) {
        msg.reply("Successful Added...");
    })
    
    
  }else{
    var sql = `SELECT * FROM acc WHERE type="netflix" `;
  mysql.query(sql,
    function (err, result, fields) {
   // msg.reply(result.length);
      text = `🧧<b> Total Account :- </b> ${result.length}
-------------------------------------------------------
`
for (var i = 0; i < result.length; i++) {
        text += `🗝<b> UDI :- </b> ${result[i].uid}
📧<b> Email :-</b> <code>${result[i].email}</code>
🔐<b> Password :-</b> <code>${result[i].pass}</code>
📊<b> Status :-</b> ${result[i].status}
For Delete /delete_${result[i].uid}
--------------------------------------------------------
`;
}
msg.replyWithHTML(text);
    }); }
  }
  } );
bot.command('/hotstar', (msg) =>{ 
if(msg.message.chat.id==1890681503){
  var myArray = msg.message.text.split(" ");

  //msg.reply(myArray);
  if(myArray.length==3){
    sql = `INSERT INTO acc (uid, email, pass, Id, type, status) VALUES (NULL, '${myArray[1]}', '${myArray[2]}', '0', 'hotstar', '0');`
    mysql.query(sql,
    function (err, result) {
        msg.reply("Successful Added...");
    })
    
    
  }else{
    var sql = `SELECT * FROM acc WHERE type="hotstar" `;
  mysql.query(sql,
    function (err, result, fields) {
   // msg.reply(result.length);
      text = `🧧<b> Total Account :- </b> ${result.length}
-------------------------------------------------------
`
for (var i = 0; i < result.length; i++) {
        text += `🗝<b> UDI :- </b> ${result[i].uid}
📧<b> Email :-</b> <code>${result[i].email}</code>
🔐<b> Password :-</b> <code>${result[i].pass}</code>
📊<b> Status :-</b> ${result[i].status}
For Delete /delete_${result[i].uid}
--------------------------------------------------------
`;
}
msg.replyWithHTML(text);
    }); }
}
} );
bot.hears(/\/delete_(\d+)/, (msg) => {
 if(msg.message.chat.id==1890681503){
  del = msg.message.text.split("_");
  sql = `SELECT * FROM acc WHERE uid = ${del[1]}`;
  mysql.query(sql,
    function (err, result, fields) {
     if (result.length!=0){
        sql=`DELETE FROM acc WHERE uid=${del[1]}`;
mysql.query(sql,
    function (err, result) {
      msg.reply("Deleted Successful..")
    });
      }else{
        msg.reply("Account Not found...");
      }
      if (err) msg.reply(err);
    });}
});
bot.telegram.setWebhook(url);
app.get('/refbot/', (req, res) => res.send('i am out of world!'));
app.get('/refbot/my/', (req, res) => res.send("hi ".mysql));
app.use(bot.webhookCallback("/refbot/"));
app.listen(8080,()=>{});
