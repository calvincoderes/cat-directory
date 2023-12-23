import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useGlobalContext } from "../hooks/useGlobalContext";

export const Home = () => {
  const {state, dispatch} = useGlobalContext()

  const handleSelectBreedId = () => {
    // handle input here
    
    // dummy data
    const newBreedId = 'testBreed'
    dispatch({type: "SET_BREED_ID", payload: {breedId: newBreedId}})
  }


  useEffect(() => {
    console.log('### TEST BREED ID STATE CHANGES ###', state.breedId)
  }, [state.breedId])

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Hello, This is the home page!</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" onClick={handleSelectBreedId}>Click me</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
