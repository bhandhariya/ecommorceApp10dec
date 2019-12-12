var express = require('express');
var router = express.Router();
var Product = require('../controller/product_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
 res.send({name:"product router"})
});
router.post('/createproduct',Product.create)

router.get('/getAllProductsdata',Product.getAllProductwithAllData)

router.get('/getalldataforcatefory',Product.getAllData);

router.post('/editByid',Product.editbyid);

router.post('/deletebyid',Product.deletebyid);

module.exports = router;
