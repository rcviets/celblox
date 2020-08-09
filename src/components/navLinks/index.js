import React from "react";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const NavLinks = () => {
    return (
        <Nav className="justify-content-end">
            <Nav.Item className="navLink">
                <Nav.Link eventKey="link-1" style={{color: "#451F55"}}>Customers</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navLink">
                <Nav.Link eventKey="link-2" style={{color: "#451F55"}}>Partners</Nav.Link>
            </Nav.Item>
            <Nav.Item className="navLink">
                <Nav.Link eventKey="link-2" style={{color: "#451F55"}}>Resources</Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default NavLinks;