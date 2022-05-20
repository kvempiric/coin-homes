import React from 'react'
import "../css/NavbarAfterLogin.css"
// import { Link } from "react-router-dom";
import logo from "../Assets/Images/image 56.svg";
import profile from "../Assets/Images/profile3.jpg";
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';

function NavbarAfterLogin() {
  return (
    <>
        <div className="container">
            <Navbar className="nav_bar_position" collapseOnSelect expand="lg" bg="light" variant="light">
                <Container className='mt-3'>
                    <Navbar.Brand href="/"><img src={logo} alt="" className="nav_bar_logo"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto"></Nav>
                        <Nav className="nav_link">
                            <Nav.Link href="/saved-home" className="p-0 me-2">Saved homes</Nav.Link>
                            <Nav.Link href="/massage">Massage</Nav.Link>
                            <Nav.Link href="/calculator">Calculator</Nav.Link>
                            <NavDropdown title={ <img src={profile}  alt="" className="profile_img rounded-circle"></img>} id="basic-nav-dropdown" className="dropdown_item">
                                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="/setting">Setting</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </>
  )
}

export default NavbarAfterLogin