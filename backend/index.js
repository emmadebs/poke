const express= require('express');
const mongoose =require('mongoose');
const cors = require('cors');
const app = express();
const router = express.Router();
const conx = mongoose.connection;
var bodyParser = require('body-parser')

const PokeModele = require("./modeles/Pokemon");
const Pokemon = require('./modeles/Pokemon');

app.use(express.json());
app.use(cors());
  app.use(bodyParser.json({
    limit: '50mb',
    parameterLimit: 100000
  }))

mongoose.connect("mongodb+srv://Tameh:Dino1919!@poki.l1a27.mongodb.net/Poketruc?retryWrites=true&w=majority",
{
    useNewUrlParser: true,
}
);

app.post('/insert', async (req, res) => {
    console.log(req.body);
    const nom = req.body.nom;
    
    const Pokemon = new PokeModele({nom:nom});
    try{
      await Pokemon.save();
      res.send("data dans db !")
    }
    catch(err)
    {
      console.log(err);
    }
});

app.get("/read", async (req, res) => {
  PokeModele.find({}, (err, result) => {
    if(err){
      res.send(err)
    }
    console.log(result);
    res.send(result);
  });
});
/*
app.delete("/delete/:nom", async (req, res) => {
    const nom = req.body.nom;
    try{
      await PokeModele.findByIdAndRemove(nom).exec()
    res.send("deleted");
    }
    catch(err)
    {
      console.log(err)
    }
});*/

app.listen(3001, () =>{
    console.log('Server running on port 3001 !');
});