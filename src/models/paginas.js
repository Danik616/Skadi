const mongoose = require("mongoose"); // importando el componente mogoose
const paginasSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('paginas', paginasSchema);
