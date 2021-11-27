import React, { useState } from 'react';
import axios from "axios";
import "../components/Navbar.css";


export default function App () {
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [test, setTest] = useState("");

    var topAtk = [0, 0, 0, 0, 0];
    var topId = [];
    var j = 0;
    var i = 0;
    var k = 0;

    var tri = (atk, id) => {
        for (j = 0; j<5;j++) {
            if (atk > topAtk[j]) {
                topAtk[j] = atk;
                topId[j] = id;
            }
        }
    };

    const getPokemon = async (id) => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/pokemon/${id}`
            const res = await axios.get(url)
            toArray.push(res.data);
            setTest(res.data.stats[1].base_stat);
            setPokemonData(toArray);
            tri(res.data.stats[1].base_stat, res.data.id);

            console.log(res)
        } catch (e) {
            console.log(e)
        };
    }


    var triTotal = () => {

        for(k=0;k<10;k++)
        {
            getPokemon(k);
        }
    }



    return (

        <div className="App">
            {triTotal()}
            {test}
        </div>
    );

}