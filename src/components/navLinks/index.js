import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const NavLinks = () => {
    return (
            <Nav className="justify-content-end">
                <Nav.Link eventKey="link-1" style={{ color: "#451F55" }}>Customers</Nav.Link>
                <Nav.Link eventKey="link-2" style={{ color: "#451F55" }}>Partners</Nav.Link>
                <Nav.Link eventKey="link-2" style={{ color: "#451F55" }}>Resources</Nav.Link>
            </Nav>
    );
};

export default NavLinks;