const express= require('express');
const mongoose =require('mongoose');
const app = express();

const PokeModele = require("./modeles/Pokemon");

app.use(express.json());

mongoose.connect("mongodb+srv://Tameh:Dino1919!@poki.l1a27.mongodb.net/Poketruc?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
}
);

app.get('/', async (req, res) =>{
    const pokemon = new PokeModele({nom: "Charizard", atk: 10000});

    try {
        await pokemon.save();
        }
    catch(err) {
        console.log(err);
    }
});

app.listen(3001, () =>{
    console.log('Server runni,ng on port 3001 !');
});