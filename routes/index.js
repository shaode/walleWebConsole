var express = require('express');
var mysql = require('mysql');
var router = express.Router();
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : ''
});
/* GET home page. */
connection.connect();

router.get('/', function(req, res, next) {
    //res.render('index', { title: ' NodeJS Express Home' ,message:"test"});
    connection.query('select * from walle_admin.users', function(err, rows, fields) {
        if (err) throw err ;
        res.render('index', { title: ' NodeJS Express Home' , users:rows , fields:fields});
    });
    //connection.end();

});

module.exports = router;
