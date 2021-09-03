// Base Imports
import React, { useState, useEffect, useContext } from "react";

//App imports
import UserContext from "UserContext";

//Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";

export default function ViewIncome() {
    const [income, setIncome] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(
            `https://mighty-spire-05206.herokuapp.com/users/get-income-entries`,
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
                setIncome(data);
            });
    }, []);

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col sm={12} md={8}>
                    <h3>View Income Entries</h3>
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
                            {income.map((row) => {
                                return (
                                    <tr>
                                        <td key={row.id}>{row.dateAdded}</td>
                                        <td key={row.id}>{row.description}</td>
                                        <td key={row.id}>{row.category}</td>
                                        <td key={row.id}>{row.amount}</td>
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
