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

router.post('/', upload.array('files', 3),  function (req, res)  {

 

  try {
    res.send('csv 파일이 등록되었습니다 :  ' + req.files[0].originalname + ", " + req.files[1].originalname+ "  ,"
    + req.files[2].originalname); // object를 리턴
    console.log(req.files);

    /* product file encoding check */


    fs.readFile('tmp/csv/' + req.files[0].filename,  function (err, data) {

      fileEncoding =  detectCharacterEncoding(data).encoding;
      console.log(fileEncoding);

    });

    index = 0;
    /* product file read */
    fs.createReadStream('tmp/csv/' + req.files[0].filename, {
        /* input encoding type */
        encoding: fileEncoding,
        flags : 'rs+'

      }).pipe(csv())
      .on('data', function (row) {
        

        files[index] = row;
        index++;


      }).on('end', function (row) {

     

        console.log(files)
        var keys = Object.keys(files[0]);


        /* product find column */
        for (let index = 0; index < keys.length; index++) {

          if (/제품(?=원가)|원가|상품원가|상품 원가/.exec(keys[index]))
            product_actual_price = /제품(?=원가)|원가|상품원가|상품 원가/.exec(keys[index]).input;


          else if (/제품(?=이름|명)|상품(?=이름|명)/.exec(keys[index])) {
            product_name = /제품(?=이름|명)|상품(?=이름|명)/.exec(keys[index]).input;
            console.log(product_name);
          } else if (/시작(?=일|일시|날짜)/.exec(keys[index]))
            product_start_date = /시작(?=일|일시|날짜)/.exec(keys[index]).input;

          else if (/마감(?=일|일시|날짜)/.exec(keys[index]))
            product_end_date = /마감(?=일|일시|날짜)/.exec(keys[index]).input;

          else if (/영업(?=일수|일|기간)/.exec(keys[index]))
            product_business_day = /영업?=일수|일|기간)/.exec(keys[index]).input;

          else if (/매입(=?량|""|수량)/.exec(keys[index]))
            product_purchase_count = /매입(=?량|""|수량)/.exec(keys[index]).input;

          else if (/재고|재고(=?수량)|현재 재고 수량/.exec(keys[index]))
            product_count = /재고|재고(=?수량)|현재 재고 수량/.exec(keys[index]).input;

          else if (/카테고리 1/.exec(keys[index]))
            categori1 = /카테고리 1/.exec(keys[index]).input;

          else if (/카테고리 2/.exec(keys[index]))
            categori2 = /카테고리 2/.exec(keys[index]).input;

          else if (/카테고리 3/.exec(keys[index]))
            categori3 = /카테고리 3/.exec(keys[index]).input;


          else if (/상품 고유번호|상품 번호|상품번호/.exec(keys[index]))
            purchase_product_number = /상품 고유번호|상품 번호|상품번호/.exec(keys[index]).input;

          else if (/판매 가격/.exec(keys[index]))
            sales_product_price = /판매 가격/.exec(keys[index]).input;

          else if (/상품 매출 개수/.exec(keys[index]))
            sales_amount = /상품 매출 개수/.exec(keys[index]).input;

          else if (/평균판매가/.exec(keys[index]))
            product_avg_sales_price = /평균판매가/.exec(keys[index]).input;





        }



        /* INSERT product  MYSQL */
        for (let index = 0; index < files.length; index++) {



          models.product.create({


            product_name: files[index][product_name], //상품명
            product_price: files[index][product_actual_price] / 1130,
            product_actual_price: files[index][product_actual_price], //원가

            // product_start_date: files[index][product_start_date], //시작일
            // product_end_date : files[index][product_end_date], //마감일
            // product_business_days: files[index][product_business_days], //영업일수
            // product_purchase_count: files[index][product_purchase_count], //매입량


            product_count: files[index][product_count], //재고량
            categori1: files[index][categori1],
            categori2: files[index][categori2],
            categori3: files[index][categori3],

            // product_profit: files[index][options],
            // product_purchase_date: files[index][options],
            // product_sales_period: files[index][options],
            // product_stock_period: files[index][options],
            // product_reorder_date: files[index][options],
            // product_date: files[index][options],
          });

        }




      })

   
    /* endoing check purchase file*/



      console.log("purchase input start!");


      var files2 = new Array();

      fs.readFile('tmp/csv/' + req.files[1].filename, function (err, data) {

        fileEncoding = detectCharacterEncoding(data).encoding;
        console.log(fileEncoding);
        console.log("인코딩 체크");


      });

      index2 = 0;
      /* product file read */
      fs.createReadStream('tmp/csv/' + req.files[1].filename, {
          /* input encoding type */
          encoding: fileEncoding,
          flags : 'rs+'

        }).pipe(csv())
        .on('data',  function (row2) {
          

           console.log(req.files[1].filename);
           console.log("purchase streaming");
           console.log(index2);

          files2[index2] = row2;
          index2++;
           console.log(files2);

        }).on('end', function (row) {

        

          console.log(files2[0]);
          var keys2 = Object.keys(files2[1]);

          console.log(keys2);



          for (let index = 0; index < keys2.length; index++) {

            /* purchase table */
            if (/상품 고유번호|상품고유번호|상품 고유 번호|상품번호|상품 번호|제품 고유번호|제품고유번호|제품 고유 번호|제품번호|제품 번호/.exec(keys2[index]))
              purchase_product_number = /상품 고유번호|상품고유번호|상품 고유 번호|상품번호|상품 번호|제품 고유번호|제품고유번호|제품 고유 번호|제품번호|제품 번호/.exec(keys2[index]).input;

            else if (/상품명|제품명|상품이름|제품이름/.exec(keys2[index]))
              purchase_product_name = /상품명|제품명|상품이름|제품이름/.exec(keys2[index]).input;

            else if (/상품 원가|상품원가|제품 원가|제품원가/.exec(keys2[index]))
              purchase_product_actual_price = /상품 원가|상품원가|제품 원가|제품원가/.exec(keys2[index]).input;


            else if (/매입수량|매입 수량|매입개수|매입 개수/.exec(keys2[index]))
              purchase_amount = /매입수량|매입 수량|매입개수|매입 개수/.exec(keys2[index]).input;

          }



          /* INSERT MYSQL */
          for (let index = 0; index < files2.length; index++) {

            /* 매입정보 */
            models.purchase.create({



              purchase_product_number: files2[index][purchase_product_number],
              purchase_product_name: files2[index][purchase_product_name],
              purchase_product_actual_price: files2[index][purchase_product_actual_price],
              purchase_amount: files2[index][purchase_product_actual_price],
              //   purchase_date: files[index][options],


            });




          }

        })




        console.log("sales input start!");


        var files3 = new Array();
  
        fs.readFile('tmp/csv/' + req.files[2].filename, function (err, data) {
  
          fileEncoding = detectCharacterEncoding(data).encoding;
          console.log(fileEncoding);
          console.log("인코딩 체크");
  
  
        });
  
        index3 = 0;
        /* product file read */
        fs.createReadStream('tmp/csv/' + req.files[2].filename, {
            /* input encoding type */
            encoding: fileEncoding,
            flags : 'rs+'
  
          }).pipe(csv())
          .on('data',  function (row3) {
            
  
             console.log(req.files[2].filename);
             console.log("sales streaming");
             console.log(index3);
  
            files3[index3] = row3;
            index3++;
             console.log(files3);
  
          }).on('end', function (row) {
  
          
  
            console.log(files3[0]);
            var keys3 = Object.keys(files3[1]);
  
            console.log(keys3);
  
  
  
            for (let index = 0; index < keys3.length; index++) {
  
              /* purchase table */
              if (/상품 고유번호|상품고유번호|상품 고유 번호|상품번호|상품 번호|제품 고유번호|제품고유번호|제품 고유 번호|제품번호|제품 번호/.exec(keys3[index]))
              sales_product_number = /상품 고유번호|상품고유번호|상품 고유 번호|상품번호|상품 번호|제품 고유번호|제품고유번호|제품 고유 번호|제품번호|제품 번호/.exec(keys3[index]).input;
  
              else if (/상품명|제품명|상품이름|제품이름/.exec(keys3[index]))
              sales_product_name = /상품명|제품명|상품이름|제품이름/.exec(keys3[index]).input;
  
              else if (/판매가격|판매 가격/.exec(keys3[index]))
              sales_product_actual_price = /판매가격|판매 가격/.exec(keys3[index]).input;
  


              else if (/매출수량|판매 수량/.exec(keys3[index]))
              sales_amount = /매출수량|판매 수량/.exec(keys3[index]).input;

              else if (/판매날짜|판매일시/.exec(keys3[index]))
              sales_date = /판매날짜|판매일시/.exec(keys3[index]).input;
              
  
            }
  
  
  
            /* INSERT MYSQL */
            for (let index = 0; index < files3.length; index++) {
  
              /* 매입정보 */
              models.sales.create({
  
  
  
                sales_product_number: files3[index][sales_product_number],
                sales_product_name: files3[index][sales_product_name],
                sales_product_actual_price: files3[index][sales_product_actual_price],
                sales_amount: files3[index][sales_amount],
                sales_date: Date.parse(files3[index][sales_date]) ,
  
  
              });
  
  
  
  
            }
  
          })

  




  } catch (err) {
    if (!req.files) {
      res.send("please choose files");

    } else {
      console.log(err);
    }


  }




});


module.exports = router;
