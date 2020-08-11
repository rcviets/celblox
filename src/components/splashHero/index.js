import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import "./style.css"

const Hero = () => {
  return (
    <div className="splashHero">
      <Jumbotron fluid>
        <Container>
          <h1 className="header1">Insulated Concrete Forms</h1>
          <div>
          <h2 className="header2">Sustainable. Durable. Cost Effective.</h2>
          </div>
          <div className="button">
            <Button className="buttonLM" size="lg">
              Learn More
            </Button>{' '}
          </div>
        </Container>
      </Jumbotron>
    </div>
  );
};


export default Hero;