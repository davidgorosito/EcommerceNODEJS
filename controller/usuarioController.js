const fs= require('fs');
const path = require('path')
//const bcrypt=require('bcrypt');
const { json }= require('express');
const { validationResult } = require('express-validator');

let usuarioJson = path.join(__dirname, '../data/DBusuarios.json');
let arrayUsuarios = JSON.parse(fs.readFileSync(usuarioJson,'utf-8'));




let usuarioController={
    register:(req,res)=> res.render('crear-cuenta',{titulo: "Proyecto",
    mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'}),
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
        res.render('login',{ titulo: "Proyecto",
        mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        
    })
    //  res.redirect('crear-cuenta')
    //agruege la validacion //faltan hacer las cockies todavia y los check
    },processLogin:( req, res)=>{
         let validation= validationResult(req)
         let errors= validation.errors;
         if( errors ==""){
             let user = arrayUsuarios.find(userToLog=>userToLog.email == req.body.email);
             if (user!= undefined){
                 if(bcrypt.compareSync(req.body.password,user.password)){
                     req.session.userId =user.id
                     res.redirect("/")
                 }else{
                     res.render("login",{errors})
                      }
                }else{
                      res.render("login",{errors})
                    }
                } else{
                      res.render("login",{errors})
                    } 
    }
}

module.exports = usuarioController;