import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/nav";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Navigation />
        </Col>
      </Row>
    </Container>
  );
};

export default App;