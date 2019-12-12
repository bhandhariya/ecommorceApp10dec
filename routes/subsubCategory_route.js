var express = require('express');
var router = express.Router();
var SSC=require('../controller/subsubCategory_controller');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({ title: 'Sub Sub Category workling fine' });
});

router.post('/createSScategory',SSC.createSubSUbCategory);

module.exports = router;
