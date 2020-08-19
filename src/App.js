import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./components/nav";
import Hero from "./components/splashHero";
import InfoCards from "./components/splashInfo";
import "./App.css";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <Navigation />
          <Hero />
        </Col>
        </Row>
        <Row>
        <Col md={12}>
          <InfoCards />
        </Col>
      </Row>
    </Container>
  );
};

export default App;