// Base
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Bootstrap
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function AppNavBar(){
	return (
		<Navbar bg="light" expand="lg">
		<Navbar.Brand as={Link} to="/" >Budget Tracking</Navbar.Brand>
		<Navbar.Toggle aria-controls="basic-navbar-nav"/>
		<Navbar.Collapse id="basic-navbar-nav">
			<Nav className="ms-auto">
				<Nav.Link as={NavLink} to="/login">Login</Nav.Link>
				<Nav.Link as={NavLink} to="/register">Register</Nav.Link>			
			</Nav>			
		</Navbar.Collapse>		
		</Navbar>		
	)
}