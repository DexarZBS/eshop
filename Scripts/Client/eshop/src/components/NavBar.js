import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const {user} = useContext(Context)
    return (
        <NavBar>
            <NavBar.Brand href="#home"> Navbar </NavBar.Brand>
            <Nav className="">
                <NavLink href="#home"></NavLink>
                <NavLink href="#featurea"></NavLink>
                <NavLink href="#pricing"></NavLink>
            </Nav>
        </NavBar>
    );
};

export default NavBar;