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
router.get('/children', indexController.children)
router.get('/accesorios', indexController.accesorios)
router.get('/mujer', indexController.mujer)
router.get('/nuevo-mujer', indexController.nuevoM)
router.get('/tops-mujer', indexController.topsM)
router.get('/buzos-mujer', indexController.buzoM)
router.get('/camperas-mujer', indexController.camperasM)
router.get('/pantalones-mujer', indexController.pantalonesM)
router.get('/shorts-mujer', indexController.shortsM)
router.get('/conjuntos-mujer', indexController.conjuntoM)
router.get('/zapatillas-mujer', indexController.zapatillasM)
router.get('/sale-mujer', indexController.saleM)
router.get('/hombre', indexController.hombre)
router.get('/nuevo-hombre', indexController.nuevoH)
router.get('/remeras-hombre', indexController.remerasH)
module.exports = router;
