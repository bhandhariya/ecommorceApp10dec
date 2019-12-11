var express = require('express');
var router = express.Router();
var SubCategory=require('../controller/subCategory_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({name:'working fine'})
});

router.post('/createsubsubCategories',SubCategory.createsubsubCategories);

router.get('/getAlsubsubCategories',SubCategory.getAlsubsubCategories);

router.post('/deletesubsubcategorybyid',SubCategory.deletesubsubcategorybyid);

router.get('/getrelatedSubcatandcategorydata',SubCategory.getrelatedSubcatandcategorydata);

router.post('/getsubsubcategorybyid',SubCategory.getsubsubcategorybyid);

router.post('/editsubsubcategory',SubCategory.editsubsubcategory);


module.exports = router;
