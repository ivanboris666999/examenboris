const mongoose = require('mongoose');

const PersonajeSchema = new mongoose.Schema({
    nombre : String,
    raza : String,
    rol : String,
    nivel : String,
    
})

const PersonajeModel = mongoose.model('personaje',PersonajeSchema,'Personaje');
module.exports = PersonajeModel;