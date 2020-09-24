import React from 'react';
import { Form, FormControl, Image, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../logo.svg'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar expand="lg">
            <Navbar.Toggle className="toggle" variant="warning" aria-controls="basic-navbar-nav" />
            <Navbar.Brand href="/"> <Image className="logo" src={Logo} /> </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Form>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
                <Nav className="ml-auto">
                    <Link className="menu-item" to="/spot">Spot</Link>
                    <Link className="menu-item" to="/">Blog</Link>
                    <Link className="menu-item" to="/">Destination</Link>
                    <Link className="menu-item" to="/">Contact</Link>
                </Nav>
            </Navbar.Collapse>
            <Nav.Link className="login_btn">Login</Nav.Link>
        </Navbar>
    );
};

export default Header;