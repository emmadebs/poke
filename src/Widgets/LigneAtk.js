import React from 'react';
import './LigneAtk.css';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import pika from './pika.png';
import './LigneAtk.css';


export default class DescriptionEquipe extends React.Component {
    
    render() {
        return(            
            <div className="contour">
                <Row>
                    <Col xs={6} >
                        <img src={pika.png} alt="image du pok" className="plein"></img>
                    </Col>
                    <Col xs={6}>
                        <div className="descriptionNom">
                            Nom
                        </div>
                        <div className="descriptionConf">
                            conférence
                        </div>
                    </Col>
                </Row>
            </div>
                
        );
    }
}