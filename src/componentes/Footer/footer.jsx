import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './footer.css'

const Footer = () => {
  return (
    <footer  className="footer">
      <Container>
        <Row>
          <Col className="text-footer">
            <p>Todos los derechos reservados - 2023</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
