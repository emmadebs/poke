import {Container, Row, Col} from 'react-bootstrap';
import './LigneAtk.css';
import A1 from '../images/A1.png'
import A2 from '../images/A2.png'
import A3 from '../images/A3.png'
import A4 from '../images/A4.png'
import A5 from '../images/A5.png'
import axios from "axios";
import React, { useState } from 'react';


export default function LigneAtk (props) {
        
        const [atkPoke, setatkPoke] = useState("");
        const [imgPoke, setimgPoke] = useState("");
        const [namePoke, setnamePoke]= useState("");

        var atkpk=[];
        var imgBar = null;
        var name=[];
    
        const getType = async (id) => {
            try {
                const url = `https://pokeapi.co/api/v2/pokemon/${id}`
                const res = await axios.get(url)
                setatkPoke(res.data.stats[1].base_stat);
                setimgPoke(res.data.sprites["front_default"])
                setnamePoke(res.data.name);
                console.log(res)
            } catch (e) {
                console.log(e)
            };
        } 
    
        var appel= (num) => {
    
            getType(num);
            atkpk[num]=atkPoke;
            name[num]=namePoke;
        }

        var chooseBar =(classement) =>
        {
            if(classement==1)
            {
                imgBar=A1;
            }
            if(classement==2)
            {
                imgBar=A2;
            }
            if(classement==3)
            {
                imgBar=A3;
            }
            if(classement==4)
            {
                imgBar=A4;
            }
            if(classement==5)
            {
                imgBar=A5;
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
                            <img src={imgBar} alt="barre" className="barre1"></img>
                            <i>{namePoke}</i>
                        </Col>
                        <Col xs={2} md={2} lg={2} xl={2}>
                        <div className="chiffre">
                            {atkpk[props.id]}
                        </div>
                        </Col>
                    </Row>
               </Container>
            </div>
                
        );
    }