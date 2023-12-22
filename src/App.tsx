import { useState } from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
import "./styles/App.css";


const BaseComponent = () => {
  return (
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
  )
}
// initialize and define router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<BaseComponent />}>
      <Route index element={<BaseComponent />} />
      <Route path="login" element={<BaseComponent />} />
      <Route path="cat/:id" element={<BaseComponent />} />
    </Route>
  )
)

function App() {
  const [count, setCount] = useState(0);
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
