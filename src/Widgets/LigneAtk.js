import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './LigneAtk.css';
import pika from '../images/pika.png'
import BAtk from '../images/BAtk.png'


export default class LigneAtk extends React.Component {
    
    render() {
        return(            
            <div className="ligne">
                <Container>
                    <Row>
                        <Col xs={1} md={1} lg={1} xl={1}>
                            <div className="classm">

                                0

                            </div>
                        </Col>
                        <Col xs={2} md={2} lg={2} xl={2}>
                            <img src={pika} alt="pokemon" className="img"></img>
                            
                        </Col>
                        <Col xs={7} md={7} lg={7} xl={7}>
                            <img src={BAtk} alt="barre" className="barre1"></img>
                        </Col>
                        <Col xs={2} md={2} lg={2} xl={2}>
                        <div className="chiffre">
                            225
                        </div>
                        </Col>
                
                
                
                
                    </Row>
               </Container>
            </div>
                
        );
    }
}