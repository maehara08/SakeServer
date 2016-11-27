/**
 * Created by riku_maehara on 2016/11/27.
 */

var　mysql=require('mysql');

var connection=mysql.createConnection({
    host: 'localhost',
    user: 'dbadmin',
    password: 'sake_maehara',
    database: 'sake_db'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

