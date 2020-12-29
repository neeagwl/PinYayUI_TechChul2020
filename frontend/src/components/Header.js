import React from 'react';
import {Navbar, Container} from 'react-bootstrap';
import '../stylesheets/header.css';

const Header = () => {

    return (
        <Navbar bg="dark" variant="dark" className="navbar">
            <Container>
            <Navbar.Brand href="/">PinYay</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Pin Profile
          </Navbar.Text>
        </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default Header
