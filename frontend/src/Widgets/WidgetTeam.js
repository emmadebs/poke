import React, { useState, useEffect } from "react";
import axios from "axios";
import MonPoke from './MonPoke.js';
import { Col, Container, Row } from "react-bootstrap";
import './WidgetTeam.css';



function WidgetTeam() {

    const [pokemons, setPokemons] = useState([]);
    var pok1 = [];

function load(name) {
    console.log(name);
    pok1.push(name);
}

    useEffect(() => {
        axios.get('http://localhost:3001/read').then((response) => {
            console.log(response);
            setPokemons(response.data);
        })
    }, [])

    return (
        <div className="widget6">
            <div className = "title">
                MY TEAM !
            </div>
            {pokemons.slice(0,1).map((val, key) => (

                <tr key={`list-elem-${key}`}>
                    <th className="region" scope="row"> {load(val.nom)}</th>
                </tr>
            ))};
            {pokemons.slice(1,2).map((val, key) => (

<tr key={`list-elem-${key}`}>
    <th className="region" scope="row"> {load(val.nom)} </th>
</tr>
))};
{pokemons.slice(2,3).map((val, key) => (

<tr key={`list-elem-${key}`}>
    <th className="region" scope="row"> {load(val.nom)}</th>
</tr>
))};
{pokemons.slice(3,4).map((val, key) => (

<tr key={`list-elem-${key}`}>
    <th className="region" scope="row"> {load(val.nom)}</th>
</tr>
))};
{pokemons.slice(4,5).map((val, key) => (

<tr key={`list-elem-${key}`}>
    <th className="region" scope="row"> {load(val.nom)} </th>
</tr>
))};
{pokemons.slice(5,6).map((val, key) => (

<tr key={`list-elem-${key}`}>
    <th className="region" scope="row"> {load(val.nom)} </th>
</tr>
))};
        <Container>
            <Row>
                <Col xs={6} md={6} lg={6} xl={6}>
                    <MonPoke nom={pok1[0]}/>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                    <MonPoke nom={pok1[1]}/>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                    <MonPoke nom={pok1[2]}/>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                    <MonPoke nom={pok1[3]}/>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                    <MonPoke nom={pok1[4]}/>
                </Col>
                <Col xs={6} md={6} lg={6} xl={6}>
                    <MonPoke nom={pok1[5]}/>
                </Col>
            </Row>
        </Container>
        </div>
    );
}
export default WidgetTeam;