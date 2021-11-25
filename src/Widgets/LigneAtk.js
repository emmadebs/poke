import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './LigneAtk.css';


export default class LigneAtk extends React.Component {
    
    render() {
        return(            
            <div className="contour">
                <Row>
                    <Col xs={6} >
                    <img src={this.props.logo} alt="logoEquipe" className="plein"></img>
                    </Col>
                    <Col xs={6}>
                        <div className="descriptionNom">
                            Nom
                        </div>
                        <div className="stat">
                            Stat0
                        </div>
                    </Col>
                </Row>
            </div>
                
        );
    }
}