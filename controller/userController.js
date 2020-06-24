const fs= require('fs');
const path= require('path');
const bcrypt= require ('bcryptjs');
//traigo la base de datos 
let productsJson = path.join(__dirname,'../data/db_productos.json');
let arrayProducts = JSON.parse(fs.readFileSync(productsJson, 'utf-8')|| "[]");


let userController={
    home: (req, res)=> {
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
        res.render('index',{mensaje:mensaje})
    },
    productAdd: (req , res)=>{
        let mensaje ="3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500";
         res.render("productAdd",{mensaje:mensaje}) 
        },
    product:(req,res)=>res.render('listaDeProductos',{arrayProducts}),
}// probando git
module.exports=userController;