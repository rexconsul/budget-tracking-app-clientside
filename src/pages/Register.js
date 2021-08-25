// Base
import React from 'react'

// Bootstrap
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Register(){
	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col sm={12} md={4}>
				<h3>Register</h3>
				<Form>
					<Form.Group>
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter email address" required/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" required/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" placeholder="Confirm Password" required/>
					</Form.Group>
					<Button variant="success" type="submit">Register</Button>	
				</Form>
				</Col>
			</Row>		
		</Container>	
	)
}