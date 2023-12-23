import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

export const CatPage: React.FC = () => {
  const { imageId } = useParams<{ imageId: string }>();
  useEffect(() => {
    console.log("The cat page has been rendered~!");
  }, []);
  return (
    <Container>
      <Row>
        <Col>
          <h1>Hello,This is the Cat page!</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Cat Image ID: {imageId}</h2>
        </Col>
      </Row>
    </Container>
  );
};
