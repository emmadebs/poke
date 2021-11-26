import axios from "axios";
import React, { useState } from 'react';
import Pokedata from './Pokedata'


const Tri = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemontype] = useState("");
    var all = [];

    const getPokemon = async () => {
        const toArray = [];
        var all = [];
        var i = 0;

        for (i = 0; i++; i < 10) {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`
                const res = await axios.get(url)
                toArray.push(res.data);
                setPokemontype(res.data.types[0].type.name);
                setPokemonData(toArray);
                console.log(res)
            }
            catch (e) {
                console.log(e)
            };
        }
    }

    //alert("coucou");



    return (
        <div class="App">

        {getPokemon()}

            {pokemonData.map((data) => {
              let pokemonActuel = new Pokedata();


                var nom=data.name;
                var hp=data.stats[0].base_stat;
                var atk= data.stats[1].base_stat;
                var def=data.stats[2].base_stat;
                var atkSpe=data.stats[3].base_stat;
                var defSpe=data.stats[4].base_stat;
                var speed=data.stats[5].base_stat;
                var weight=data.weight / 4.3;
                var height = data.height * 3.9;
                var type = data.types[0].type.name;

                pokemonActuel.nom=nom;
                pokemonActuel.hp=hp;
                pokemonActuel.atk=atk;
                pokemonActuel.def=def;
                pokemonActuel.atkSpe=atkSpe;
                pokemonActuel.defSpe=defSpe;
                pokemonActuel.speed=speed;
                pokemonActuel.weight=weight;
                pokemonActuel.height=height;
                pokemonActuel.type=type;

                

                all.push(pokemonActuel);
        return (
            <div className="truc">
              {all.atk}
            </div>
        );
      })}
        </div>
    );

};

export default Tri;