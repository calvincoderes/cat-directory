import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import { useGlobalContext } from "../hooks/useGlobalContext";

// styles
import { ResponsiveContainer } from "../styles/common.styles";

// components
import { BreedDropdown } from "../components/Dropdown";

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
      <ResponsiveContainer>
        <Container fluid>
          <Row className='dropdown-section'>
            <Col xs={12}>
              <BreedDropdown/>
            </Col>
          </Row>
        </Container>
      </ResponsiveContainer>
    </>
  );
}
