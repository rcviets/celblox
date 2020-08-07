import React from "react";
import "./style.css"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

const Hero = () => {
  return (
    <div className="splashHero">
      <Jumbotron fluid>
        <Container>
          <Button className="button" size="lg">Learn More</Button>{' '}
          <p></p>
        </Container>
      </Jumbotron>
    </div>
  );
};


export default Hero;