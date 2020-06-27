const fs= require('fs');
const path = require('path')
//const bcrypt=require('bcrypt');
const { json }= require('express')

let usuarioJson = path.join(__dirname, '../data/DBusuarios.json');
let arrayUsuarios = JSON.parse(fs.readFileSync(usuarioJson,'utf-8'));




let usuarioController={
    register:(req,res)=> res.render('crear-cuenta'),
    crear:(req, res,next) =>{
        let nuevoUsuario = {
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email: req.body.email,
            genero: req.body.genero,
            password:bcrypt.hashSync(req.body.contraseña,10),
            rcontraseña:bcrypt.hashSync(req.body.rcontraseña,10), 
        },
        arrayUsuarios = [...arrayUsuarios, nuevoUsuario];
        fs.writeFileSync(usuarioJson,JSON.stringify(arrayUsuarios, null, "usuarios"));
        res.redirect('/index');
     },
        login: (req, res)=>{
        res.render('login',{ title: "Proyecto",
        mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        
    })
     res.redirect('crear-cuenta')
    }
 }

module.exports = usuarioController;