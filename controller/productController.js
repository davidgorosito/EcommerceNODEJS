const fs= require('fs');
const path= require('path');
const bcrypt= require ('bcryptjs');
//traigo la base de datos 



//base de datos sql 
const DB = require('../src/database/models')
const OP = DB.Sequelize.Op

let productController={
    home:(req, res)=> {
        res.render('index',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    }, // mando al usuario al formulario de creacion del producto
    productAdd: async (req, res) => {
      try {
        const categorias = await DB.Categoria.findAll()
        const generos = await DB.Genero.findAll()
        res.render('productAdd', { categorias, generos,
          titulo: "Proyecto",
          mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500' })
      } catch (error) {
        res.send(error)
      }
    },
     //detalles del producto
    detail: (req, res) => {
        DB.Producto.findByPk(req.params.id)
          .then((detalleProducto) => {
           res.render('detail', { detalleProducto: detalleProducto ,
                    titulo: "Proyecto",
                    mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'})
              })
              .catch((error) => {
                res.send(error)
              })
    },//guardo producto
    store: async (req, res) => {
          const nuevoProducto = {
            ...req.body,
            imagen_producto:req.files[0].filename
          }
          try {
            await DB.Producto.create(nuevoProducto)
            
            res.redirect('/listarProductos')
          } catch (error) {
            res.render('not-found',error)
          }
    },//listado de productos 
     listar: (req , res)=>{
            DB.Producto.findAll()
              .then((lista) => {
                res.render('listado-productos', { lista:lista, 
                titulo: "Proyecto",
                mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'})
              })
              .catch((error) => {
                res.send(error)
              })
    },//busco el producto a editar 
        edit: async (req, res) => {
            try {
               let productFound= await DB.Producto.findByPk(req.params.id)
              let categorias = await DB.Categoria.findAll()
              let generos = await DB.Genero.findAll()
              res.render('edit', { categorias, generos,productFound,
                titulo: "Proyecto",
                mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500' })
            } catch (error) {
              res.send(error)
            }
      },//guardo el producto 
        saveP: async (req, res) => {
          const productToEdit = await DB.Producto.findByPk(req.params.id)
          productToEdit.update(req.body)
          res.redirect('/listarProductos')
    },//borrar producto
    delete: (req, res) => {
            DB.Producto.destroy({
              where: {
                id: req.params.id
              }
            })
            res.redirect('/')
          },
 }
module.exports=productController;