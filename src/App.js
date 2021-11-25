import './App.css';
import PrimarySearchAppBar from './components/Navbar'
import Widget_Attaque from './Widgets/Widget_Attaque';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>


function App() {
      return(
        <Container fluid classname="fondpk">

          <PrimarySearchAppBar/>

            <Row>

           <div className ="mono">
             zbeb
           </div>

              <Col xs={6} md={6} lg={6} xl={6}>
              
              <Widget_Attaque/>

              </Col>
              <Col xs={6} md={6} lg={6} xl={6}>
              
              <Widget_Attaque/>

              </Col>

            </Row>
          </Container>
      );
}

export default App;