var express = require('express');
var router = express.Router();
const usuarioController = require('../controller/usuarioController')
var path =require('path');
const multer = require('multer');
const { check } = require('express-validator');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/users')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})
 
var upload = multer({ storage: storage })


// Ingresar Cuenta
router.get('/login',usuarioController.login);
router.post('/login',usuarioController.processLogin);

/* GET users listing. */
router.get('/lista',usuarioController.listar);
//Crear cuenta y guardar
router.get('/register',usuarioController.register);
router.post('/register',upload.any(),[
  check("email")
  .isEmail()
  .withMessage("El mail debe ser valido"),
  //Validacion de contraseña
  check("contrasena")
  .isLength({
    min: 8
  })
  .withMessage("La contraseña tiene que tener al menos 6 caracteres"),
  /*check("avatar") => {
    if (req.files[0]) {
      let avatar = req.files[0].mimetype;
      if (avatar == "image/jpeg" || avatar == "image/png" || avatar == "image/jpg"){
        return true;
      } else {
        throw new Error ("El avatar debe ser .jpg, .jpeg, .png o .gif");
      }
    } else {
      return true;
    }
  }),*/
],usuarioController.crear);
// editar
router.get('/editar/:id',usuarioController.editar);
router.put('/editar/:id',upload.any(),usuarioController.update);





module.exports = router;
