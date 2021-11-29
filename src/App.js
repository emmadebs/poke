import './App.css';
import PrimarySearchAppBar from './components/Navbar.js'
import Tri2 from './Widgets/Tri2.js'
import Attaque from './Widgets/Attaque.js'
import Type from './Widgets/Type.js'
import Widget_Attaque from './Widgets/Widget_Attaque';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div>
  
      <PrimarySearchAppBar />

      <Type/>

      <Tri2/>
        
      <Widget_Attaque />

      <Widget_Attaque />

    </div>
  );
}

export default App;