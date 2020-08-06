import React from "react";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
    return (
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="/logo.png"
        width="319px"
        height="60px"
        className="d-inline-block align-top"
      />{' '}
      React Bootstrap
    </Navbar.Brand>
  </Navbar>
    );
};

export default Nav;