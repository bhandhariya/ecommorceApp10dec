var express = require('express');
var router = express.Router();
var User=require('../controller/user_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',User.register);

router.post('/login',User.login);

module.exports = router;
