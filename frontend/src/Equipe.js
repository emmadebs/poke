import './App.css';
import PrimarySearchAppBar from './components/Navbar.js'
import Attaque from './Widgets/Attaque.js'
import Type from './Widgets/Type.js'
import Widget_Attaque from './Widgets/Widget_Attaque';
import React from 'react';
import Raid from './Widgets/Raid'
import MonPoke from './Widgets/MonPoke'
import WidgetTeam from './Widgets/WidgetTeam'
import { Container, Row, Col } from 'react-bootstrap';

function Equipe() {
  return (
    <div className="body">
      <WidgetTeam/>
      

    </div>
  );
}

export default Equipe;
