var express = require('express');
var router = express.Router();
var SubSubCategory=require('../controller/subsubCategory_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a Category route');
});

router.get('/getAlsubsubCategories',SubSubCategory.getAllSubCategories);

router.post('/createsubsubCategories',SubSubCategory.createSubCategory);

// router.post('/getsubsubcategorybyid',SubSubCategory.getsubsubcategorybyid);

router.post('/deletesubsubcategorybyid',SubSubCategory.deleteSubCategorybyid);

router.get('/getallcatforsubcatbyid',SubSubCategory.getallcatforsubcatbyid);

// router.put('/editsubsubcategory',SubSubCategory.editsubsubcategory);


module.exports = router;
