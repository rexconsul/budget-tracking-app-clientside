// Base imports
import React from 'react'
import { Link } from 'react-router-dom'

// Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

export default function Home(){
	return (
		<Container fluid>
			<Row className="justify-content-center">
				<Col sm={12} md={4}>
					<h3>Homepage</h3>
					<div className="d-grid gap-3" >
						<Button as={Link} variant="success" to="/add-category" className="btn-block">Add Category</Button>
						<Button as={Link} variant="success" to="/add-entry" className="btn-block">Add Entry</Button>
						<Button as={Link} variant="success" to="/view-expense" className="btn-block">View Expense Entries</Button>
						<Button as={Link} variant="success" to="/view-income" className="btn-block">View Income Entries</Button>
					</div>						
				</Col>			
			</Row>		
		</Container>
	)
}