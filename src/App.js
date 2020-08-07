import React from 'react';
import Nav from './components/nav';
import Hero from './components/splashHero';
import MainPoints from './components/splashInfo'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="splashInfo">
        <MainPoints />
      </div>
    </div>

  );
}

export default App;
