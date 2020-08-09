import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
    return (
            <Navbar fixed="top" bg="light" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="navbar"
                        src="/CelBlox_Logo.png"
                        width="319px"
                        height="60px"
                        className="d-inline-block align-bottom"
                    />{' '}
                    <h5 className="brandText">The Future Is Coming Together</h5>
                </Navbar.Brand>
            </Navbar>
    );
};

export default Nav;