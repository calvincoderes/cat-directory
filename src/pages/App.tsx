import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Hello, Bootstrap in React!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary">Click me</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
