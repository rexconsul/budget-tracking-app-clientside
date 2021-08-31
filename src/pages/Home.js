// Base imports
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

//App import
import UserContext from "UserContext";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Home() {
    const [balance, setBalance] = useState([]);
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/users/get-total`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setBalance(data);
            });
    }, []);

    return (
        <Container fluid>
            <Row className="justify-content-center align-items-center">
                <Col sm={12} md={4}>
                    <h2>Homepage</h2>
                    <div>
                        <h4 className="lead">Current Balance</h4>
                        <h1 className="display-1 fw-bolder">
                            <span className="me-3">₱</span>
                            {balance}
                        </h1>
                    </div>
                    <div className="d-grid gap-3">
                        <Button
                            as={Link}
                            variant="success"
                            to="/add-category"
                            className="btn-block"
                        >
                            Add Category
                        </Button>
                        <Button
                            as={Link}
                            variant="success"
                            to="/add-entry"
                            className="btn-block"
                        >
                            Add Entry
                        </Button>
                        <Button
                            as={Link}
                            variant="success"
                            to="/view-expense"
                            className="btn-block"
                        >
                            View Expense Entries
                        </Button>
                        <Button
                            as={Link}
                            variant="success"
                            to="/view-income"
                            className="btn-block"
                        >
                            View Income Entries
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
