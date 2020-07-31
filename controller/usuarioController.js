const fs= require('fs');
const path = require('path')
//const bcrypt = require('bcryptjs');

const bcrypt= require('bcryptjs');
const { json }= require('express');
const { validationResult,body } = require('express-validator');


const DB = require('../src/database/models')
const OP = DB.Sequelize.Op


let usuarioController={
    //  muestro el formulario
      register:(req,res)=> res.render('crear-cuenta',{titulo: "Proyecto",
    mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
}),
// creo un usuario
    crear: async (req, res, next) => {
        let validation = validationResult(req)
        let errors = validation.errors
        if (errors != '') {
            res.render('crear-cuenta', { errors,titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        } )
        }
        const newUser = {
            email: req.body.email,
            contrasena: bcrypt.hashSync(req.body.contrasena, 10),
            avatar: req.files !== [] ? req.files[0].filename : null
        }
        try {
            await DB.Usuario.create(newUser)
            return res.redirect('/')
        } catch (error) {
            res.send(error)
        }
    },
     // formulario de logueo
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