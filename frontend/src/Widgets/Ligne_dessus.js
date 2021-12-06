import {Container, Row, Col} from 'react-bootstrap';
import './LigneAtk.css';


export default function Ligne_dessus () {
        

        return(            

            <div className="ligne_top">
                <Container>
                    <Row>
                        <Col xs={2} md={2} lg={2} xl={2}>
                            <div className="chiffre_dessus">

                                Rank

                            </div>
                        </Col>
                        <Col xs={1} md={1} lg={1} xl={1}>
                        </Col>
                        <Col xs={7} md={7} lg={7} xl={7}>
                        <div className="titre_widget">

                                TOP ATTACKERS

                            </div>
                        </Col>
                        <Col xs={2} md={2} lg={2} xl={2}>
                        <div className="chiffre_dessus">
                            ATK 
                        </div>
                        </Col>
                    </Row>
               </Container>
            </div>
                
        );
    }