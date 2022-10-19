const mongoose = require("mongoose"); // importando el componente mogoose
const plantillasSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('plantillas', plantillasSchema);