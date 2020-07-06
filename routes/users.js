var express = require('express');
var router = express.Router();
const usuarioController = require('../controller/usuarioController')
var path =require('path');
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'images/users')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register',usuarioController.register);
router.post('/register',upload.any(),usuarioController.crear);

router.get('/login',usuarioController.login)



module.exports = router;
