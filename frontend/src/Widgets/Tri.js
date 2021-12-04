import axios from "axios";
import React, { useState } from 'react';
import Pokedata from './Pokedata'


const Tri = () => {

    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonType, setPokemontype] = useState("");
    var all = [];

    const getPokemon = async () => {
        const toArray = [];
        var i = 0;

        for (i = 0; i++; i < 10) {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${i}`
                const res = await axios.get(url)
                toArray.push(res.data);
                setPokemontype(res.data.types[0].type.name);
                setPokemonData(toArray);
                console.log(res)

                let pokemonActuel = new Pokedata();


                var nom=res.data.name;
                var hp=res.data.stats[0].base_stat;
                var atk= res.data.stats[1].base_stat;
                var def=res.data.stats[2].base_stat;
                var atkSpe=res.data.stats[3].base_stat;
                var defSpe=res.data.stats[4].base_stat;
                var speed=res.data.stats[5].base_stat;
                var weight=res.data.weight / 4.3;
                var height = res.data.height * 3.9;
                var type = res.data.types[0].type.name;

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
        

            {/*{pokemonData.map((data) => {
        return (
            <div className="truc">
          
            </div>
        );
      })}*/}
        </div>
    );

};

export default Tri;