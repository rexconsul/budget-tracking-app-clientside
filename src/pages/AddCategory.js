// Base
import React from 'react'

// Bootstrap Components
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function AddCategory(){
	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col sm={12} md={4}>
					<h3>Add Category</h3>
					<Form>
						<Form.Group>
							<Form.Label>Category Name</Form.Label>
							<Form.Control type="text" required />
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Type</Form.Label>
							<Form.Control as="select" required>
								<option>Income</option>
								<option>Expense</option>
							</Form.Control>
						</Form.Group>
						<Button variant="success" type="submit">Add Category</Button>
					</Form>
				</Col>
			</Row>		
		</Container>
	)
}