var express = require('express');
var router = express.Router();
var Brand=require('../controller/brand_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render({ title: 'Brnad api working' });
});

router.post('/create',Brand.createBrand);

module.exports = router;
