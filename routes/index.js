var express = require('express');
var router = express.Router();
var productController = require('../controller/productController')
let indexController= require('../controller/indexController')

/* GET home page. */
router.get('/', indexController.home);
// form de crear producto
router.get('/agregarProducto',productController.productAdd)
router.post('/agregarProducto',productController.store)
//listar productos 
router.get('/listarProductos',productController.listar)
// detalle de producto
router.get('/producto/detail/:id', productController.detail)
// editar producto
router.get('/producto/editar/:id', productController.edit)
router.put('/producto/editar/:id', productController.saveP)
// eliminar producto
router.delete('/producto/delete/:id', productController.delete)


router.get('/porquereciclado', indexController.recicla)
router.get('/help/covid19', indexController.covid19)
router.get('/hombres', indexController.hombres)
router.get('/children', indexController.children)
router.get('/accesorios', indexController.accesorios)
router.get('/mujer', indexController.mujer)
router.get('/camperas-mujer', indexController.camperasM)
module.exports = router;
