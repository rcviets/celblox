import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavLinks from "../navLinks";
import "./style.css";

const Nav = () => {
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
                    <h5 className="brandText">The Future Is Coming Together</h5>{' '}
                    <NavLinks />
                </Navbar.Brand>
            </Navbar>
        </div>
    );
};

export default Nav;