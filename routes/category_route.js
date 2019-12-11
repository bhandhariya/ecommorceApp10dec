var express = require('express');
var router = express.Router();
var Category=require('../controller/category_controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create',Category.createCategory);

router.get('/getAllCategories',Category.getAllCategories);

router.post('/editCategorybyID',Category.editCategorybyID);

router.post('/deleteCategorybyID',Category.deleteCategorybyID);

module.exports = router;
