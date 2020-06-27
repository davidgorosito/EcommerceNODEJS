var express = require('express');
var router = express.Router();
const usuarioController = require('../controller/usuarioController')
var path=require('path')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register',usuarioController.register);
router.post('/register',usuarioController.crear);

router.get('/login',usuarioController.login)

module.exports = router;
