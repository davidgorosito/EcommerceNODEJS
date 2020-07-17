const fs = require('fs');
const path = require('path');
const bcrypt = require ('bcryptjs');

let indexController={
    home: (req, res)=> {
        res.render('index', {
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    recicla: (req,res)=>{
        res.render('porquereciclado',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    covid19: (req,res)=>{
        res.render('covid19',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    mujer: (req,res)=>{
        res.render('mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    nuevoM: (req,res)=>{
        res.render('nuevo-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    topsM: (req,res)=>{
        res.render('tops-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    buzoM: (req,res)=>{
        res.render('buzos-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    camperasM: (req,res)=>{
        res.render('camperas-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    pantalonesM: (req,res)=>{
        res.render('pantalones-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    shortsM: (req,res)=>{
        res.render('shorts-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    conjuntoM: (req,res)=>{
        res.render('conjuntos-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    zapatillasM: (req,res)=>{
        res.render('zapatillas-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    saleM: (req,res)=>{
        res.render('sale-mujer',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })
    },
    hombre: (req,res)=>{
        res.render('hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    nuevoH: (req,res)=>{
        res.render('nuevo-hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    remerasH: (req,res)=>{
        res.render('remeras-hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    buzosH: (req,res)=>{
        res.render('buzos-hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    camperasH: (req,res)=>{
        res.render('camperas-hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    pantalonesH: (req,res)=>{
        res.render('pantalones-hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    shortsH: (req,res)=>{
        res.render('shorts-hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    zapatillasH: (req,res)=>{
        res.render('zapatillas-hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    saleH: (req,res)=>{
        res.render('sale-hombre',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    detallesInfo: (req,res)=>{
        res.render('detalles-info',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    carrito: (req,res)=>{
        res.render('carrito',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    
}

module.exports=indexController;