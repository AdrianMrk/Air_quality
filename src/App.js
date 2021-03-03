import * as React from "react";
import Seeker from './components/seeker'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
function App() {
  
 
  return (
    
    <div className="App" >
    <div id="backgroundImage"></div>
    <Row>
      <Col xs={12} md={5}>
        <Seeker/>
      </Col>
      <Col xs={12} md={7}>
        <div id="header">JAKOŚĆ POWIETRZA</div>
        <div id="header2">W Twojej Okolicy</div>
      </Col>
    </Row>    
    </div>
     
  ); 
}

export default App;
