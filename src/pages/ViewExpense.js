// Base Imports
import React, { useEffect, useContext, useState } from "react";
// App import
import UserContext from "UserContext";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";


export default function ViewExpense() {
    const [expense, setExpense] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/users/get-expense-entries`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setExpense(data);
            });
    }, []);

    return (
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
                            {expense.map((row) => {
                                return (
                                    <tr>
                                        <td>{row.dateAdded}</td>
                                        <td>{row.description}</td>
                                        <td>{row.category}</td>
                                        <td>{row.amount}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
