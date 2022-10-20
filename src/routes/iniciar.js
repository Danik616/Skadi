const express = require("express");
const router = express.Router(); //manejador de rutas de express
const usuariosSchema = require("../models/iniciar");
const paginasSchema = require("../models/paginas");
const plantillasSchema = require("../models/plantillas");
//Registrar usuario
router.post("/usuarios", (req, res) => {
    const usuarios = usuariosSchema(req.body);
    usuarios
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar todos los usuarios
router.get("/usuarios", (req, res) => {
    usuariosSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar datos de usuario por su id
router.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, usuario, correo_electronico, contraseña, numero_contacto, permiso } = req.body;
    usuariosSchema
        .updateOne({ _id: id }, {
            $set: { nombre, usuario, correo_electronico, contraseña, numero_contacto, permiso }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar un usuario por su id
router.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    usuariosSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Registrar pagina
router.post("/paginas", (req, res) => {
    const paginas = paginasSchema(req.body);
    paginas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar todos las paginas
router.get("/paginas", (req, res) => {
    paginasSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar datos de la pagina por su id
router.put("/paginas/:id", (req, res) => {
    const { id } = req.params;
    const { codigo } = req.body;
    paginasSchema
        .updateOne({ _id: id }, {
            $set: { codigo }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar pagina por su id
router.delete("/paginas/:id", (req, res) => {
    const { id } = req.params;
    paginasSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Registrar plantilla
router.post("/plantillas", (req, res) => {
    const plantillas = plantillasSchema(req.body);
    plantillas
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Consultar todos las plantillas
router.get("/plantillas", (req, res) => {
    plantillasSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Modificar datos de usuario por su id
router.put("/plantillas/:id", (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    plantillasSchema
        .updateOne({ _id: id }, {
            $set: { nombre }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//Eliminar plantilla por su id
router.delete("/plantillas/:id", (req, res) => {
    const { id } = req.params;
    plantillasSchema
        .remove({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;
