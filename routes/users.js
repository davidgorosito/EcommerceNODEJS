var express = require('express');
var router = express.Router();
const usuarioController = require('../controller/usuarioController')
var path =require('path');
const multer = require('multer');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/register',usuarioController.register);
router.post('/register',upload.any(),usuarioController.crear);

router.get('/login',usuarioController.login)




// multer 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })


module.exports = router;
