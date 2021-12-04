const express= require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const app = express();

const PokeModele = require("./modeles/Pokemon");

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Tameh:Dino1919!@poki.l1a27.mongodb.net/Poketruc?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
}
);

app.post('/insert', async (req, res) =>{
    const nom = req.body.nom;
    const pokemon = new PokeModele({nom: nom});

    try {
        await pokemon.save();
        }
    catch(err) {
        console.log(err);
    }
});

app.listen(3001, () =>{
    console.log('Server running on port 3001 !');
});