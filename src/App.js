import './App.css';
import PrimarySearchAppBar from './components/Navbar.js';
import Widget_Attaque from './Widgets/Widget_Attaque';
import Widget_Defense from './Widgets/Widget_Defense';
import React from 'react';
import Type from './Widgets/Type';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <div>

      <PrimarySearchAppBar />

      <Container>
        <Row>
        <Col xs={7} md={7} lg={7} xl={7}>
          <Row>

            <Widget_Attaque />
          </Row>
          <Row>
            <Widget_Defense />

          </Row>
        </Col>
        <Col xs={5} md={5} lg={5} xl={5}>
          <Type />
        </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;