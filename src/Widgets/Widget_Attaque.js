import React, { Component } from "react";
import "./Widget_Attaque.css";
import LigneAtk from './LigneAtk';
import Ligne_dessus from './Ligne_dessus';

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


export default class Widget_Attaque extends Component{
    render() {
        return(
        <div>
            <div className="contour">

                <Ligne_dessus/>

                <LigneAtk id="798" classm="1" color="w"/>
                
                <LigneAtk id="409" classm="2" color="g"/>

                <LigneAtk id="289" classm="3" color="w"/>

                <LigneAtk id="486" classm="4" color="g"/>

                <LigneAtk id="383" classm="5" color="w"/>
            </div>
        </div>
        )
    }

}