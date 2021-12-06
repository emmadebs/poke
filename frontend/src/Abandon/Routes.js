import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Equipe from '../Equipe.js'
import Accueil from './Accueil.js';


export default() => {
    <Routes>
        <Route path ="/" exact element ={<Accueil/>}/>
        <Route path ="/Equipe" exact element ={<Equipe/>}/>
    </Routes>
}