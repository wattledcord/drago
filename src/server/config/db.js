'user strict';
const mysql=require('mysql');
const con=mysql.createConnection({
    host:"localhost",
    user:"testuser",
    password:"mysql1234MYSQL",
    database:"drago"
});
con.connect(function(err) {
    if (err) throw err;
});
module.exports = con;