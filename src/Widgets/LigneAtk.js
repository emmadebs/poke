import React from 'react';
import {Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import './LigneAtk.css';


export default class LigneAtk extends React.Component {
    
    render() {
        return(            
            <div className="contour">
             
                   
                    <img src={this.props.logo} alt="pokemon" className="plein"></img>
                
                   
                        <div className="descriptionNom">
                            Nom
                        </div>
                        <div className="stat">
                            Stat0
                        </div>
                    
               
            </div>
                
        );
    }
}