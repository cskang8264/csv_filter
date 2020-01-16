var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer({
  dest: 'tmp/csv'
});
var fs = require('fs');
var csv = require('csv-parser');
var md4 = require('js-md4'); //암호화 모듈 
var async = require('async');

var detectCharacterEncoding = require('detect-character-encoding');


var files = new Array();
var fileEncoding;







/* sequelize for mysql  */
const {
  sequelize
} = require('../models/index.js');
const models = require('../models');

/* GET home page. */

router.get('/', function (req, res) {
  res.render('upload');

});




/* POST  */



module.exports = router;
