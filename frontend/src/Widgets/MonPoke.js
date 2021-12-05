import React, { useState } from "react";
import "./MonPoke.css";
import pv from '../images/pv.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import axios, { Axios } from "axios";
import Button from '@mui/material/Button';


export default function MonPoke (props){

    const [pokemon, setpokemon] = useState("");
    const [pokemonType, setpokemonType] = useState("");
    const [imgpok, setimgpok] = useState("");
    const [pvpok, setpvpok] = useState("");

    const getPoke = async () => {
      try {
          console.log(props.nom);
        const url = `https://pokeapi.co/api/v2/pokemon/${props.nom}`
        const res = await axios.get(url)
        setpokemon(res.data.name);
        setpokemonType(res.data.types[0].type.name);
        setimgpok(res.data.sprites["front_default"]);
        setpvpok(res.data.stats[0].base_stat);
        console.log(res)
      } catch (e) {
        console.log(e)
      };
    }

    function supprimer (nom) { 
        axios.delete(`http://localhost:3001/delete/${nom}`)
    }
    
    const clicli =(e) => {
      supprimer(props.nom);
    }

    var chargePoke = () => {
        getPoke();
    }

        return(
            <div className="widg">
                {chargePoke()}
                <Container>
                    <Row>
                    <Col xs={5} md={5} lg={5} xl={5}>
                        <Row>
                            <img className="profil" src={imgpok} />
                        </Row>
                        <div className="Police">
                        <Row>
                           {pokemon}
                        </Row>
                        </div>
                    </Col>
                    <Col xs={7} md={7} lg={7} xl={7}>
                        <Row>
                        <img className="barrepv" src={pv} />
                        </Row>
                        <div className="hp">
                        <Row>
                            {pvpok} hp
                        </Row>
                        <Row>
                            {pokemonType}
                        </Row>
                        <Row>
                        <form onClick={clicli}>
                            <Button onclick={() => clicli()} variant="contained" >delete</Button>
                        </form>
                        </Row>
                        </div>
                    </Col>
                    </Row>
                </Container>

            </div>
                    
        );
}