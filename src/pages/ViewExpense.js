// Base Imports
import React from 'react'

//Bootstrap
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

export default function ViewExpense(){
	return(
		<Container fluid>
			<Row className="justify-content-center">
				<Col sm={12} md={8}>
					<h3>View Expense Entries</h3>
					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>DateTime</th>
								<th>Description</th>
								<th>Category</th>
								<th>Amount</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1998-12-01 09:00</td>	
								<td>Food budget</td>
								<td>Food</td>
								<td>100</td>
							</tr>
						</tbody>
					</Table>					
				</Col>	
			</Row>
		</Container>
	)
}