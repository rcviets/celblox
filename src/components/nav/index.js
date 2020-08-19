import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="dark">
      <Navbar.Brand href="#home">
      <img
        src="/CelBlox_Logo.png"
        width="400"
        height="50"
        className="d-inline-block align-top"
        alt="Celblox logo"
      />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="nav-button" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <h5 className="brand-text">The Future Is Coming Together</h5>
        </Nav>
        <Nav>
          <Nav.Link style={{ color: "#451F55" }} className="nav-links" href="#deets">Log In</Nav.Link>
          <Nav.Link eventKey={2} style={{ color: "#451F55" }} className="nav-links" href="#memes">
            Partners
          </Nav.Link>
          <Nav.Link eventKey={2} style={{ color: "#451F55" }} className="nav-links" href="#memes">
            Resources
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;