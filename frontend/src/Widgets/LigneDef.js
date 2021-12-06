import {Container, Row, Col} from 'react-bootstrap';
import './LigneDef.css';
import D1 from '../images/D1.png'
import D2 from '../images/D2.png'
import D3 from '../images/D3.png'
import D4 from '../images/D4.png'
import D5 from '../images/D5.png'
import axios from "axios";
import React, { useState } from 'react';


export default function LigneDef (props) {

        
        const [defPoke, setdefPoke] = useState("");
        const [imgPoke, setimgPoke] = useState("");
        const [namePoke, setnamePoke]= useState("");

        var defpk=[];
        var imgBar = null;
        var name = [];

        const getType = async (id) => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}`
                const res = await axios.get(url)
                setdefPoke(res.data.stats[2].base_stat);
                setimgPoke(res.data.sprites["front_default"])
                setnamePoke(res.data.name);
                console.log(res)
            } catch (e) {
                console.log(e)
            };
        } 
    
        var appel= (num) => {
    
            getType(num);
            defpk[num]=defPoke;
            name[num]=namePoke;
        }

        var chooseBar =(classement) =>
        {
            if(classement==1)
            {
                imgBar=D1;
            }
            if(classement==2)
            {
                imgBar=D2;
            }
            if(classement==3)
            {
                imgBar=D3;
            }
            if(classement==4)
            {
                imgBar=D4;
            }
            if(classement==5)
            {
                imgBar=D5;
            }     
        }

        return(            
            
            <div className="ligne">
                {appel(props.id)}
                <Container>
                    <Row>
                        <Col xs={1} md={1} lg={1} xl={1}>
                            <div className="classm">

                                {props.classm}

                            </div>
                        </Col>
                        <Col xs={2} md={2} lg={2} xl={2}>
                        <img className="img" src={imgPoke} />
                            
                        </Col>
                        <Col xs={7} md={7} lg={7} xl={7}>
                            {chooseBar(props.classm)}
                            <img src={imgBar} className="barre1"></img>
                           <div className = " resp"><i>{namePoke}</i></div>
                        </Col>
                        <Col xs={2} md={2} lg={2} xl={2}>
                        <div className="chiffre2">
                            {defpk[props.id]}
                        </div>
                        </Col>
                    </Row>
               </Container>
            </div>
   
        );
    }