import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import "./Type.css";
import { Doughnut } from 'react-chartjs-2';
import normal from '../images/normal.png';
import fighting from '../images/fighting.png';
import flying from '../images/flying.png';
import ground from '../images/ground.png';
import poison from '../images/poison.png';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


export default function Type() {
    const [nbtype1, setnbtype1] = useState("");
    const [nbtype2, setnbtype2] = useState("");
    const [nbtype3, setnbtype3] = useState("");
    const [nbtype4, setnbtype4] = useState("");
    const [nbtype5, setnbtype5] = useState("");
    const [nametype1, setnametype1] = useState("");
    const [nametype2, setnametype2] = useState("");
    const [nametype3, setnametype3] = useState("");
    const [nametype4, setnametype4] = useState("");
    const [nametype5, setnametype5] = useState("");
    const url1 = `https://pokeapi.co/api/v2/type/1`;
    const url2 = `https://pokeapi.co/api/v2/type/2`;
    const url3 = `https://pokeapi.co/api/v2/type/3`;
    const url4 = `https://pokeapi.co/api/v2/type/4`;
    const url5 = `https://pokeapi.co/api/v2/type/5`;

    const getType = async (type) => {

        try {
            if (type == 1) {
                const res1 = await axios.get(url1);
                setnbtype1(res1.data.pokemon.length);
                setnametype1(res1.data.name);
                console.log(res1);
            }
            if (type == 2) {
                const res2 = await axios.get(url2);
                setnbtype2(res2.data.pokemon.length);
                setnametype2(res2.data.name);
                console.log(res2);
            }
            if (type == 3) {
                const res3 = await axios.get(url3);
                setnbtype3(res3.data.pokemon.length);
                setnametype3(res3.data.name);
                console.log(res3);
            }
            if (type == 4) {
                const res4 = await axios.get(url4);
                setnbtype4(res4.data.pokemon.length);
                setnametype4(res4.data.name);
                console.log(res4);
            }
            if (type == 5) {
                const res5 = await axios.get(url5);
                setnbtype5(res5.data.pokemon.length);
                setnametype5(res5.data.name);
                console.log(res5);
            }
        } catch (e) {
            console.log(e)
        };
    }

    var appel = () => {

        for (var i = 1; i < 6; i++) {
            getType(i);
        }
    }

    const data = {
        label: [
            { nametype1 },
            { nametype2 },
            { nametype3 },
            { nametype4 },
            { nametype5 }
        ],
        datasets: [{
            labels: 'Poke per Type',
            data: [nbtype1, nbtype2, nbtype3, nbtype4, nbtype5],
            backgroundColor: [
                '#797979',
                '#be004f',
                '#20a5da',
                '#bd46b7',
                '#e96900'
            ],
            radius: 150,
            borderWidth:3

        }]
    };

    return (
        <div className="type">
            {appel()}
            <div className="police">Number of Poke per Type</div>
            <Doughnut data={data} />

            <Container>
                <div className="type1">
                    <Row>
                        <Col>
                        <img src={normal} className="imageType "/>
                        </Col>
                        <Col>
                            {nametype1}
                        </Col>
                        <Col>
                            {nbtype1}
                        </Col>
                    </Row>
                </div>
                <div className="type2">
                    <Row>
                        <Col>
                        <img src={fighting} className="imageType "/>
                        </Col>
                        <Col>
                            {nametype2}
                        </Col>
                        <Col>
                            {nbtype2}
                        </Col>
                    </Row>
                </div>
                <div className="type3">
                    <Row>
                        <Col>
                        <img src={flying} className="imageType "/>
                        </Col>
                        <Col>
                            {nametype3}
                        </Col>
                        <Col>
                            {nbtype3}
                        </Col>
                    </Row>
                </div>
                <div className="type4">
                    <Row>
                        <Col>
                        <img src={poison} className="imageType "/>
                        </Col>
                        <Col>
                            {nametype4}
                        </Col>
                        <Col>
                            {nbtype4}
                        </Col>
                    </Row>
                </div>
                <div className="type5">
                    <Row>
                        <Col>
                        <img src={ground} className="imageType "/>
                        </Col>
                        <Col>
                            {nametype5}
                        </Col>
                        <Col>
                            {nbtype5}
                        </Col>
                    </Row>
                </div>
            </Container>

        </div>
    );
};