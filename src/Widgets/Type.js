import axios from "axios";
import { Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';
import "./Type.css";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import normal from '../images/normal.png';
import fighting from '../images/fighting.png';
import flying from '../images/flying.png';
import ground from '../images/ground.png';
import poison from '../images/poison.png';
import rock from '../images/rock.png';
import bug from '../images/bug.png';
import ghost from '../images/ghost.png';
import dark from '../images/dark.png';
import dragon from '../images/dragon.png';
import electric from '../images/electric.png';
import fairy from '../images/fairy.png';
import fire from '../images/fire.png';
import ice from '../images/ice.png';
import psychic from '../images/psychic.png';
import water from '../images/water.png';
import steel from '../images/steel.png';
import grass from '../images/grass.png';
import { Chart, ArcElement } from 'chart.js'
Chart.register(ArcElement);


export default function Type() {
    const [nbtype1, setnbtype1] = useState("");
    const [nbtype2, setnbtype2] = useState("");
    const [nbtype3, setnbtype3] = useState("");
    const [nbtype4, setnbtype4] = useState("");
    const [nbtype5, setnbtype5] = useState("");
    const [nbtype6, setnbtype6] = useState("");
    const [nbtype7, setnbtype7] = useState("");
    const [nbtype8, setnbtype8] = useState("");
    const [nbtype9, setnbtype9] = useState("");
    const [nbtype10, setnbtype10] = useState("");
    const [nbtype11, setnbtype11] = useState("");
    const [nbtype12, setnbtype12] = useState("");
    const [nbtype13, setnbtype13] = useState("");
    const [nbtype14, setnbtype14] = useState("");
    const [nbtype15, setnbtype15] = useState("");
    const [nbtype16, setnbtype16] = useState("");
    const [nbtype17, setnbtype17] = useState("");
    const [nbtype18, setnbtype18] = useState("");
    const [nametype1, setnametype1] = useState("");
    const [nametype2, setnametype2] = useState("");
    const [nametype3, setnametype3] = useState("");
    const [nametype4, setnametype4] = useState("");
    const [nametype5, setnametype5] = useState("");
    const [nametype6, setnametype6] = useState("");
    const [nametype7, setnametype7] = useState("");
    const [nametype8, setnametype8] = useState("");
    const [nametype9, setnametype9] = useState("");
    const [nametype10, setnametype10] = useState("");
    const [nametype11, setnametype11] = useState("");
    const [nametype12, setnametype12] = useState("");
    const [nametype13, setnametype13] = useState("");
    const [nametype14, setnametype14] = useState("");
    const [nametype15, setnametype15] = useState("");
    const [nametype16, setnametype16] = useState("");
    const [nametype17, setnametype17] = useState("");
    const [nametype18, setnametype18] = useState("");
    const url1 = `https://pokeapi.co/api/v2/type/1`;
    const url2 = `https://pokeapi.co/api/v2/type/2`;
    const url3 = `https://pokeapi.co/api/v2/type/3`;
    const url4 = `https://pokeapi.co/api/v2/type/4`;
    const url5 = `https://pokeapi.co/api/v2/type/5`;
    const url6 = `https://pokeapi.co/api/v2/type/6`;
    const url7 = `https://pokeapi.co/api/v2/type/7`;
    const url8 = `https://pokeapi.co/api/v2/type/8`;
    const url9 = `https://pokeapi.co/api/v2/type/9`;
    const url10 = `https://pokeapi.co/api/v2/type/10`;
    const url11 = `https://pokeapi.co/api/v2/type/11`;
    const url12 = `https://pokeapi.co/api/v2/type/12`;
    const url13 = `https://pokeapi.co/api/v2/type/13`;
    const url14 = `https://pokeapi.co/api/v2/type/14`;
    const url15 = `https://pokeapi.co/api/v2/type/15`;
    const url16 = `https://pokeapi.co/api/v2/type/16`;
    const url17 = `https://pokeapi.co/api/v2/type/17`;
    const url18 = `https://pokeapi.co/api/v2/type/18`;

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
            if (type == 6) {
                const res6 = await axios.get(url6);
                setnbtype6(res6.data.pokemon.length);
                setnametype6(res6.data.name);
                console.log(res6);
            }
            if (type == 7) {
                const res7 = await axios.get(url7);
                setnbtype7(res7.data.pokemon.length);
                setnametype7(res7.data.name);
                console.log(res7);
            }
            if (type == 8) {
                const res8 = await axios.get(url8);
                setnbtype8(res8.data.pokemon.length);
                setnametype8(res8.data.name);
                console.log(res8);
            }
            if (type == 9) {
                const res9 = await axios.get(url9);
                setnbtype9(res9.data.pokemon.length);
                setnametype9(res9.data.name);
                console.log(res9);
            }
            if (type == 10) {
                const res10 = await axios.get(url10);
                setnbtype10(res10.data.pokemon.length);
                setnametype10(res10.data.name);
                console.log(res10);
            }
            if (type == 11) {
                const res11 = await axios.get(url11);
                setnbtype11(res11.data.pokemon.length);
                setnametype11(res11.data.name);
                console.log(res11);
            }
            if (type == 12) {
                const res12 = await axios.get(url12);
                setnbtype12(res12.data.pokemon.length);
                setnametype12(res12.data.name);
                console.log(res12);
            }
            if (type == 13) {
                const res13 = await axios.get(url13);
                setnbtype13(res13.data.pokemon.length);
                setnametype13(res13.data.name);
                console.log(res13);
            }
            if (type == 14) {
                const res14 = await axios.get(url14);
                setnbtype14(res14.data.pokemon.length);
                setnametype14(res14.data.name);
                console.log(res14);
            }
            if (type == 15) {
                const res15 = await axios.get(url15);
                setnbtype15(res15.data.pokemon.length);
                setnametype15(res15.data.name);
                console.log(res15);
            }
            if (type == 16) {
                const res16 = await axios.get(url16);
                setnbtype16(res16.data.pokemon.length);
                setnametype16(res16.data.name);
                console.log(res16);
            }
            if (type == 17) {
                const res17 = await axios.get(url17);
                setnbtype17(res17.data.pokemon.length);
                setnametype17(res17.data.name);
                console.log(res17);
            }
            if (type == 18) {
                const res18 = await axios.get(url18);
                setnbtype18(res18.data.pokemon.length);
                setnametype18(res18.data.name);
                console.log(res18);
            }
        } catch (e) {
            console.log(e)
        };
    }

    var appel = () => {

        for (var i = 1; i < 19; i++) {
            getType(i);
        }
    }


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
   const options = {
    indexAxis: 'y' ,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: null,
    },
  };

  const labels = [nametype1,nametype2,nametype3,nametype4,nametype5,nametype6,nametype7,nametype8,nametype9,nametype10,nametype11,nametype12,nametype13,nametype14,nametype15, nametype16,nametype17, nametype18];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'nb Poke',
        data: [nbtype1, nbtype2, nbtype3, nbtype4, nbtype5, nbtype6, nbtype7, nbtype8,nbtype9, nbtype10, nbtype11, nbtype12, nbtype13, nbtype14, nbtype15, nbtype16, nbtype17, nbtype18],
        backgroundColor: [
            '#797979',
            '#be004f',
            '#20a5da',
            '#bd46b7',
            '#e96900',
            '#d4a37b',
            '#52c435',
            '#2763b1',
            '#5282a1',
            '#ff5e00',
            '#00aeff',
            '#15b91d',
            '#ffd900',
            '#ff70ac',
            '#00ffdd',
            '#2349b3',
            '#3f384b',
            '#f381cd'
        ],
        barThickness: 10
      },
    ],
  };
    return (
        <div className="type">
            {appel()}
            <div className="police">Number of Poke per Type</div>
            <Bar options={options} data={data} />

            <div className="type1"><img src={normal} className="imageType "/> {nametype1} </div> 
            <div className="type2"><img src={fighting} className="imageType "/> {nametype2} </div>
            <div className="type3"><img src={flying} className="imageType "/> {nametype3} </div>
            <div className="type4"><img src={poison} className="imageType "/> {nametype4} </div>
            <div className="type5"><img src={ground} className="imageType "/> {nametype5} </div>
            <div className="type6"><img src={rock} className="imageType "/> {nametype6} </div>
            <div className="type7"><img src={bug} className="imageType "/> {nametype7} </div>
            <div className="type8"><img src={ghost} className="imageType "/> {nametype8} </div>
            <div className="type9"><img src={steel} className="imageType "/> {nametype9} </div>
            <div className="type10"><img src={fire} className="imageType "/> {nametype10} </div>
            <div className="type11"><img src={water} className="imageType "/> {nametype11} </div>
            <div className="type12"><img src={grass} className="imageType "/> {nametype12} </div>
            <div className="type13"><img src={electric} className="imageType "/> {nametype13} </div>
            <div className="type14"><img src={psychic} className="imageType "/> {nametype14} </div>
            <div className="type15"><img src={ice} className="imageType "/> {nametype15} </div>
            <div className="type16"><img src={dragon} className="imageType "/> {nametype16} </div>
            <div className="type17"><img src={dark} className="imageType "/> {nametype17} </div>
            <div className="type18"><img src={fairy} className="imageType "/> {nametype18} </div>                     

        </div>
    );
};