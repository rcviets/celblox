import React from 'react';
import Nav from './components/nav';
import Hero from './components/splashHero';
import MainPoints from './components/splashInfo'
import Angle from "./components/getWaves";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="angle">
      <Angle />
      </div>
      {/* <div className="splashInfo">
        <MainPoints />
      </div> */}
    </div>

  );
}

export default App;
