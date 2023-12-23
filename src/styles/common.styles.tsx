// import { Container, Row, Col, Button } from "react-bootstrap";
import { defaultFCInterface } from "../types/interfaces";
import styled from "styled-components";

const BodyWrapper = styled.div`
  border-radius: 10px;
  height: 90vh;
  background: #fff;
  color: #213547;

  @media (max-width: 768px) {
    height: 100vh;
    border-radius: 0;
  }
`;  

const ResponsiveContainer: React.FC<defaultFCInterface> = ({ children }) => {
  return <BodyWrapper>{children}</BodyWrapper>;
};

export { ResponsiveContainer };
