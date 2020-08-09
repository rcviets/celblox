import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./style.css";

const Navigation = () => {
    return (
        <div>
            <Navbar fixed="top" bg="light" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="celblox logo"
                        src="/CelBlox_Logo.png"
                        width="319px"
                        height="60px"
                        className="d-inline-block align-bottom"
                    />{' '}
                    <h5 className="brandText">The Future Is Coming Together</h5>
                </Navbar.Brand>
            </Navbar>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
               </Nav.Link>
                    </Nav.Item>
                </Nav>
        </div>
    );
};

export default Navigation;