import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import "./style.css"

const Hero = () => {
  return (
    <Jumbotron fluid>
      <h1 className="header1">Insulated Concrete Forms</h1>
      <div>
        <h2 className="header2">Sustainable. Durable. Cost Effective.</h2>
      </div>
      <div className="button">
        <Button className="buttonLM" size="lg">
          Learn More
            </Button>{' '}
      </div>
    </Jumbotron>
  );
};


export default Hero;