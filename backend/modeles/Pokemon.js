const mongoose = require('mongoose')

const PokeSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    id: {
        type: Number,
        required: false,
    },
    hp: {
        type: Number,
        required: false,
    },
    atk: {
        type: Number,
        required: false,
    },
    def: {
        type: Number,
        required: false,
    },
    atkSpe: {
        type: Number,
        required: false,
    },
    defSpe: {
        type: Number,
        required: false,
    },
    speed: {
        type: Number,
        required: false,
    },
    type: {
        type: String,
        required: false,
    },
    height: {
        type: Number,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
    },
});

const Pokemon = mongoose.model("Pokemon", PokeSchema);
module.exports = Pokemon;