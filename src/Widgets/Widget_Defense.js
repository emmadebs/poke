import React, { Component } from "react";
import "./Widget_Defense.css";
import LigneDef from './LigneDef';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


export default class Widget_Defense extends Component{
    render() {
        return(
            <div className="contour2">
                <div className="titre_widget">
                    TOP DEFENSER
                </div>

                <LigneDef id="213" classm="1" color="w"/>
                
                <LigneDef id="377" classm="2" color="g"/>

                <LigneDef id="208" classm="3" color="w"/>

                <LigneDef id="91" classm="4" color="g"/>

                <LigneDef id="306" classm="5" color="w"/>
            </div>
                    
        )
    }

}