var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')

/* GET home page. */
router.get('/', userController.home)
// form de crear producto
router.get('/agregarProducto',userController.productAdd)
router.post('/agregarProducto',userController.store)
//listar productos 
router.get('/products',userController.product)
module.exports = router;
