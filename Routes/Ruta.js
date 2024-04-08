const express = require('express');
const RUTAS = express.Router();
const PersonajeModel = require('../Models/Personaje');

RUTAS.get('/', async (req, res) =>{
    try {
        const npc = await PersonajeModel.find();
        console.log(npc);
        res.json(npc);
    }
    catch(error){
        res.status(404).json({mensaje: error.message});
    }
});

RUTAS.post('/agregar', async (req, res) =>{
    // console.log(req.body);
    const nuevoJuego = new JuegoModel({
        nombre: req.body.nombre,
        raza: req.body.raza,
        rol: req.body.rol,
        nivel: req.body.nivel,
       
    });
    try {
        const guardarJuego = await nuevoJuego.save();
        res.status(201).json(guardarJuego);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

RUTAS.put('/editar/:id', async (req, res) =>{
    try {
        const actualizarJuego = await JuegoModel.findByIdAndUpdate(req.params.id, req.body, { new: true});
        res.status(201).json(actualizarJuego);
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

RUTAS.delete('/eliminar/:id', async (req, res) =>{
    try {
        const eliminarJuego = await JuegoModel.findByIdAndDelete(req.params.id);
        res.json({mensaje: 'Juego eliminada correctamente'});
        
    } catch(error){
        res.status(400).json({mensaje: error.message});
    }
});

module.exports = RUTAS;