import React from "react";
import "./style.css";
import Navbar from "react-bootstrap/Navbar";

const Nav = () => {
    return (
            <Navbar fixed="top" bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="navbar"
                        src="/logo.png"
                        width="319px"
                        height="60px"
                        className="d-inline-block align-bottom"
                    />{' '}
                    The Future Is Coming Together
                </Navbar.Brand>
            </Navbar>
    );
};

export default Nav;