const mongoose = require("mongoose"); // importando el componente mogoose
const usuariosSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    usuario: {
        type: String,
        required: true
    },
    correo_electronico: {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    numero_contacto: {
        type: Number,
        required: true
    },
    permiso: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('usuarios', usuariosSchema);

