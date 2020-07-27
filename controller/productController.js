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
    },
    productAdd: (req , res)=>{
         res.render("productAdd",{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        }) 
        }, 
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
          },
        
    store:(req , res)=>{
        //capturo los datos del formulario mediante una variable 
        let productoNuevo={
            name: req.body.name,    
            price: req.body.price,
            descount: req.body.descount,
            description: req.body.description,
        } 
        console.log(productoNuevo,req.body);
       //agrego ala db los datos tomados 
       let nuevoarrayDeProductos=[...products,productoNuevo];
        console.log(nuevoarrayDeProductos)
      // escribo la nueva db   
        fs.writeFileSync(productsJson,JSON.stringify(nuevoarrayDeProducts,null," "))
    },
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
    },
    edit : (req , res)=>{
        //busco el producto a editar 
        let productDetail = products.find(function (product){
           return  product.Id == req.params.id}
        )
        res.render('edit',{productDetail,
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
        saveP: (req, res)=>{let id = req.params.id;
           // agarro la info que viene por el form
            Products.map((productoEdit)=>{
                 if(productoEdit.id==id){
                    productoEdit.name=req.body.name
                    productoEdit.price=req.body.price
                    productoEdit.discount=req.body.discount
                    productoEdit.description=req.body.description
                    }
                })
                //lo guardo en la base de datos

                   fs.writeFileSync(productsJson,JSON.stringify(Products));
                   res.redirect('/')  

    },
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