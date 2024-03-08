import { Col, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

function App() {

  return (
    <Row>
      <Col lg={12} md={9} sm={6} className='d-flex justify-content-center'>
        <h1>Enter Name</h1>
      </Col>

      <Col lg={12} className='d-flex justify-content-center'>
        <input />
        <Button variant="dark">Save Name</Button>
      </Col>
    </ Row>
  );
}

export default App;
