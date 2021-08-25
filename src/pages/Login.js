// Base
import React from 'react'

// Bootstrap
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Login(){
	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col sm={12} md={4}>
				<h3>Login</h3>
				<Form>
					<Form.Group>
						<Form.Label>Email Address</Form.Label>
						<Form.Control type="email" placeholder="Enter email address" required/>
					</Form.Group>
					<Form.Group className="mb-3">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" required/>
					</Form.Group>
					<Button variant="success" type="submit">Submit</Button>	
				</Form>
				</Col>
			</Row>		
		</Container>
	)
}