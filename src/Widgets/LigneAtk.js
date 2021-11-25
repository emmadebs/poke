import React, { Component } from "react";
import Typography from '@mui/material/Typography';
import pika from './pika.png'
import 'Widget_Attaque.css';
export default class LigneAtk extends Component{

   
    render() {
        return(
            <div class = "container">
                <div class= "row">
                    <div classname= "rank">
                    1
                    </div>
                    <img src={pika}/>
                    
            </div>
        </div>
        )
    }
}