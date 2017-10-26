var express = require('express');
var router = express.Router();
var fs=require("fs");
var mysql=require("mysql");
var connection=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'123456',
  database:'banner'
  });
/* GET home page. */
router.get('/in', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  connection.connect();
  connection.query("SELECT * FROM `biao`",function (err,rows,fields) {
    res.header("Access-Control-Allow-Origin","*");
    res.send(rows)
  })
  connection.end();
});

module.exports = router;
