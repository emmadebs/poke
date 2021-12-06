import React, { useState } from 'react';
import axios from "axios";
import "../components/Navbar.css";


export default function Attaque () {
    const [pokemon, setPokemon] = useState("pikachu");
    const [pokemonData, setPokemonData] = useState([]);
    const [move, setTest] = useState("flamethrower");
    const [moveData, setMoveData] = useState([]);

    const getMove = async (move) => {
        const toArray = [];
        try {
            const url = `https://pokeapi.co/api/v2/move/${move}`
            const res = await axios.get(url)
            toArray.push(res.data);
            setMoveData(toArray);
            console.log(res)
          } catch (e) {
            console.log(e)
          };
    }

    return (

        <div className="App">
            {moveData.map((data) => {
          return (
            <div>

            {getMove()}
                {data.accuracy}
                </div>
          );
        })}
        </div>
    );

}