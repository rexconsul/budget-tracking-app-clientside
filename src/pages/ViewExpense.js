// Base Imports
import React, { useEffect, useContext, useState } from "react";
// App import
import UserContext from "UserContext";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default function ViewExpense() {
    const [expense, setExpense] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        getExpense();
    }, []);

    function getExpense() {
        fetch(
            `https://mighty-spire-05206.herokuapp.com/users/get-expense-entries`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${user.accessToken}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setExpense(data);
            });
    }

    function removeEntry(id) {
        fetch(
            `https://mighty-spire-05206.herokuapp.com/users/delete-expense-entry/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${user.accessToken}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => console.log(data));
        getExpense();
    }

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
                                <th>Modify</th>
                            </tr>
                        </thead>
                        <tbody>
                            {expense.map((row, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{row.dateAdded}</td>
                                        <td>{row.description}</td>
                                        <td>{row.category}</td>
                                        <td>{row.amount}</td>
                                        <td>
                                            <Button
                                                variant="outline-danger"
                                                onClick={() =>
                                                    removeEntry(row._id)
                                                }
                                            >
                                                Remove
                                            </Button>
                                        </td>
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
