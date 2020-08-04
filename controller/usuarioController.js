const fs = require("fs");
const path = require("path");
//const bcrypt = require('bcryptjs');

const bcrypt = require("bcryptjs");
const { json } = require("express");
const { validationResult, body } = require("express-validator");

const DB = require("../src/database/models");
const db = require("../src/database/models");
const OP = DB.Sequelize.Op;

let usuarioController = {
  //  muestro el formulario
  register: (req, res) =>
    res.render("crear-cuenta", {
      titulo: "Proyecto",
      mensaje:
        "3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500",
    }),
  // creo un usuario , funcionando
  crear: async (req, res, next) => {
    let validation = validationResult(req);
    let errors = validation.errors;
    if (errors != "") {
      res.render("crear-cuenta", {
        errors,
        titulo: "Proyecto",
        mensaje:
          "3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500",
      });
    }
    const newUser = {
      email: req.body.email,
      contrasena: bcrypt.hashSync(req.body.contrasena, 10),
      avatar: req.files !== [] ? req.files[0].filename : null,
    };
    try {
      await DB.Usuario.create(newUser);
      return res.redirect("/");
    } catch (error) {
      res.send(error);
    }
  },
  // formulario de logueo
  login: (req, res) => {
    res.render("login", {
      titulo: "Proyecto",
      mensaje:
        "3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500",
    });
  },
  processLogin: async (req, res) => {
    try {
      let validation = validationResult(req);
      let errors = validation.errors;
      if (errors == "") {
        let usuario = await DB.Usuario.findOne({
          where: {
            email: req.body.email,
          },
        });
        if(usuario && bcrypt.compareSync(req.body.contrasena, usuario.contrasena)){
          req.session.usuarioId = usuario.id;
          res.render("index",{ titulo: "Proyecto",
          mensaje:
            "3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500"});
    }else {
          res.render("login", { errors });
        }
    }
    } catch (error) {
      res.send(error);
    }
  },
  // metodo de listar usuarios funcionando
  listar: (req, res) => {
    DB.Usuario.findAll()
      .then((lista) => {
        res.render("listado-usuarios", {
          lista: lista,
          titulo: "Proyecto",
          mensaje:
            "3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500",
        });
      })
      .catch((error) => {
        res.send(error);
      });
  },
  // metodo de editar funcionando , no me updatea la imagen
  editar: async (req, res) => {
    try {
      const usuarioEditar = await DB.Usuario.findByPk(req.params.id);
      res.render("editar-usuario", {
        usuarioEditar,
        titulo: "Proyecto",
        mensaje:
          "3 y 6 cuotas sin interés | envío gratis en compras superiores a $1500",
      });
    } catch (error) {
      res.send(error);
    }
  },
  update: async (req, res) => {
    const usuarioToEdit = await DB.Usuario.findByPk(req.params.id);
    usuarioToEdit.update(req.body);
    res.redirect("/users/lista");
  },
};

module.exports = usuarioController;
