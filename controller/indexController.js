const fs= require('fs');
const path= require('path');
const bcrypt= require ('bcryptjs');

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
        res.render('covid19')
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
    hombres: (req,res)=>{
        res.render('hombres',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    children: (req,res)=>{
        res.render('children',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
    accesorios: (req,res)=>{
        res.render('hombres',{
            titulo: "Proyecto",
            mensaje: '3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500'
        })

    },
}

module.exports=indexController;