import React from 'react'
import '../css/NavBar.css'
// import PropTypes from 'prop-types'
import logo from '../Assets/Images/white.svg'


// import $ from 'jquery'; 
import {Link} from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';



function NavBar() {
  return (
    <div>
		<Navbar className="nav_bar_position" collapseOnSelect expand="lg" bg="light" variant="light">
			<Container className='mt-3' >
				<Navbar.Brand href="/"><img src={logo} alt="" /></Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>
					<Nav className="nav_link">
						<Nav.Link href="#">About</Nav.Link>
						<Nav.Link href="#">Help</Nav.Link>
						<Nav.Link href="#">Contact</Nav.Link>
						<Link className='navbar-Signin' to="signin">Sign In</Link>
						<Link to="/register" className="btn mb-0 register_btn ">Register</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
    </div>
  )
}



export default NavBar

