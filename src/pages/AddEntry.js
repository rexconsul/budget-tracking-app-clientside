// Base
import React from 'react'

// Bootstrap Components
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function AddEntry(){
	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col sm={12} md={4}>
					<h3>Add an Entry</h3>
					<Form>
						<Form.Group>
							<Form.Label>Type</Form.Label>
							<Form.Control as="select" required>
								<option>Income</option>
								<option>Expenses</option>
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Category</Form.Label>
							<Form.Control as="select" required>
								<option>Food</option>
								<option>Salary</option>
							</Form.Control>
						</Form.Group>
						<Form.Group>
							<Form.Label>Description</Form.Label>
							<Form.Control type="text" required/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Amount</Form.Label>
							<Form.Control type="number" required/>
						</Form.Group>
						<Button variant="success" type="submit">Add Entry</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}