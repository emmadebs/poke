import React, { Component } from "react";
import "./Widget_Attaque.css";
import LigneAtk from './LigneAtk';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


export default class Widget_Attaque extends Component{
    render() {
        return(
            <div className="contour">
                <LigneAtk id="100" classm="1"/>
                
                <LigneAtk id="101" classm="2"/>

                <LigneAtk id="102" classm="3"/>

                <LigneAtk id="49" classm="4"/>

                <LigneAtk id="32" classm="5"/>
            </div>
                    
        )
    }

}