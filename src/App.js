import './App.css';
import PrimarySearchAppBar from './components/Navbar'
import Widget_Attaque from './Widgets/Widget_Attaque';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
  
      <><PrimarySearchAppBar />

      <div>
        
      <Widget_Attaque />

      <Widget_Attaque />

    </div></>
  );
}

export default App;