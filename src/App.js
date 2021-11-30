import './App.css';
import PrimarySearchAppBar from './components/Navbar.js'
import Tri2 from './Widgets/Tri2.js'
import Attaque from './Widgets/Attaque.js'
import Type from './Widgets/Type.js'
import Widget_Attaque from './Widgets/Widget_Attaque';
import React from 'react';
import DonuTypes from './Widgets/DonuTypes';
import Raid from './Widgets/Raid'
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div className="body">
  
      <PrimarySearchAppBar />

      <Type/>

      <Attaque/>
        
      <Widget_Attaque />

      <Raid/>

    </div>
  );
}

export default App;