var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var dbconfig   = require('../config/database.js');
var connection = mysql.createConnection(dbconfig);

router.get('/', function(req, res, next){

    connection.query('SELECT * from sales', function(err, rows) {
      if(err) throw err;
      console.log('The solution is: ', rows);
      res.send(rows);
    });
  });

module.exports = router;