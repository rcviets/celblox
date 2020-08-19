import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Angle from "../getWaves";
import "./style.css"

const Hero = () => {
  return (
    <Container fluid>
      <Jumbotron className="splash-hero" fluid>
  
      </Jumbotron>
      <Angle />
    </Container>
  );
};


export default Hero;