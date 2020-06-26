const fs= require('fs');
const path= require('path');
const bcrypt= require ('bcryptjs');
//traigo la base de datos 
let productsJson = path.join(__dirname,'../data/db_productos.json');
const products= JSON.parse(fs.readFileSync(productsJson,'utf-8'));


let productController={
    home: (req, res)=> {
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
        res.render('index',{mensaje:mensaje})
    },
    productAdd: (req , res)=>{
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
         res.render("productAdd",{mensaje:mensaje}) 
        },
    detail: (req, res) => {
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
        let productDetail = products.find(function (product){
           return  product.Id == req.params.id}
        )
        res.render('detail',{productDetail, mensaje:mensaje})
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
        res.render('listado-productos',{products,
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    edit : (req , res)=>{
        //busco el producto a editar 
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
        let productDetail = products.find(function (product){
           return  product.Id == req.params.id}
        )
        res.render('edit',{productDetail, mensaje:mensaje})
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
    delete:(req, res)=>{
        // busco el producto a eliminar
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
        let productDetail = products.find(function (product){
           return  product.Id == req.params.id}
        )
        res.render('delete',{productDetail, mensaje:mensaje})
    },
}

module.exports=productController;