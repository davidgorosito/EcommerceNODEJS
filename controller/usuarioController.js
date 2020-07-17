const fs= require('fs');
const path = require('path')
<<<<<<< HEAD
//const bcrypt = require('bcryptjs');
const bcrypt= require('bcryptjs');

=======
const bcrypt= require('bcryptjs');
>>>>>>> 0fc6304c47516d41edd8ae74ce5364070cb988e4
const { json }= require('express');
const { validationResult } = require('express-validator');

let usuarioJson = path.join(__dirname, '../data/DBusuarios.json');
let arrayUsuarios = JSON.parse(fs.readFileSync(usuarioJson,'utf-8')) || [];



let usuarioController={
      register:(req,res)=> res.render('crear-cuenta',{titulo: "Proyecto",
    mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
}),

    crear:(req, res, next) =>{
        
        let nuevoUsuario = {
            nombre:req.body.nombre,
            apellido:req.body.apellido,
            email: req.body.email,
            genero: req.body.genero,
            password: bcrypt.hashSync(req.body.password),
            avatar:req.files[0].filename
        
        }
         let nuevaBase = [...arrayUsuarios, nuevoUsuario];
        fs.writeFileSync(usuarioJson,JSON.stringify(nuevaBase , null, " "));
        res.redirect('/');
     },
        login: (req, res)=>{
        res.render('login',{ titulo: "Proyecto",
        mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        
    });
  
    //  res.redirect('crear-cuenta')
    //agruege la validacion //faltan hacer las cockies todavia y los check
},
processLogin:( req, res)=>{
    
                        let validation= validationResult(req)
                         let errors= validation.errors;
                         
                         if(errors.length === 0){
                        let user = arrayUsuarios.find(userToLog=>userToLog.email === req.body.email);
                        
                        if (user != undefined){
                            console.log(user, req.body.password)
                            if(bcrypt.compareSync(req.body.password,user.password)){
                            
                                req.session.user = user.email;
                                console.log(user, req.body)
                                //cookie recordame
                                
                                if(req.body.recordame != undefined){
                                    res.cookie('recordame', user.email, { maxAge: 60000} );
                                }
                                res.redirect("/")
                            }   
                            
            }
        }
         }
        }
     



module.exports = usuarioController