const mongoose = require('mongoose')

const PokeSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    atk: {
        type: Number,
        required: true,
    },
});

const Pokemon = mongoose.model("PokeSchema", PokeSchema)
module.exports = Pokemon