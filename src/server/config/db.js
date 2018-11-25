'user strict';
const mysql=require('mysql');
const config=require('./config');
const con=mysql.createConnection({
   host:config.db.host,
   user:config.db.user,
   password:config.db.password,
   database:config.db.database
});
con.connect(function(err) {
    if (err) throw err;
});
module.exports = con;