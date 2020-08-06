import React from "react";
import "./style.css"
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Hero = () => {
  return (
    <div className="splashHero">
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};


export default Hero;