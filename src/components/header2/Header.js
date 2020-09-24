import React, { useContext } from 'react';
import {Image, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../Logo.png';
import { Link } from 'react-router-dom';
import './Header.css'
import { UserContext } from '../../App';
const Header = () => {
    const [loginUser] = useContext(UserContext);
    const {isSignnedIn, displayName} = loginUser;
    return (
        <Navbar className="menu" expand="lg">
            <Navbar.Toggle className="toggle" variant="warning" aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/"> <Image className="logo" src={Logo} /> </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Link className="menu-items" to="/spot">Spot</Link>
                    <Link className="menu-items" to="/">Blog</Link>
                    <Link className="menu-items" to="/">Destination</Link>
                    <Link className="menu-items" to="/">Contact</Link>
                </Nav>
            </Navbar.Collapse>
            {
                isSignnedIn? <Nav.Link className="login_btn">{ displayName }</Nav.Link> :
                <Nav.Link href="/login" className="login_btn">Login</Nav.Link>
            }
        </Navbar>
    );
};

export default Header;