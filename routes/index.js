var express = require('express');
var router = express.Router();
var productController = require('../controller/productController')

/* GET home page. */
router.get('/', productController.home)
// form de crear producto
router.get('/agregarProducto',productController.productAdd)
router.post('/agregarProducto',productController.store)
//listar productos 
router.get('/listarProductos',productController.listar)
// detalle de producto
router.get('/producto/detail/:id', productController.detail)
// editar producto
router.get('/producto/editar/:id', productController.edit)
router.post('/producto/editar/:id', productController.saveP)
// eliminar producto
router.get('/producto/delete/:id', productController.delete)
//router.post('/producto/editar/:id', productController.confirmDelete)

module.exports = router;
