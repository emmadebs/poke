import './App.css';
import PrimarySearchAppBar from './components/Navbar'
import Widget_Attaque from './Widgets/Widget_Attaque';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


function App() {
  return (
  
      <><PrimarySearchAppBar />

      <div className="center">
        
      <Widget_Attaque />

      <Widget_Attaque />

    </div></>
  );
}

export default App;