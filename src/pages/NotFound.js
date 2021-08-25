// Base
import React from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import Container from 'react-bootstrap/Container'

export default function NotFound() {
	return (
		<Container fluid>
			<h3>Page Not Found</h3>
			<p>Go back to the <Link to="/">homepage</Link></p>
		</Container>
	)
}