// Base
import React, { useState, useEffect, useContext } from "react";

// App import
import UserContext from "UserContext";

// Bootstrap Components
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

//Swal
import Swal from "sweetalert2";

export default function AddEntry() {
    const [type, setType] = useState("");
    const [category, setCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState();
    const { user } = useContext(UserContext);

    useEffect(() => {
        fetch(`https://mighty-spire-05206.herokuapp.com/users/get-categories/${type}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setCategory(data);
                // setCategory(data) for assigning of data to the state category
            });
    }, [type]);

    function addEntry(e) {
        e.preventDefault();

        fetch(`https://mighty-spire-05206.herokuapp.com/users/add-entry`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${user.accessToken}`,
            },
            body: JSON.stringify({
                description: description,
                type: type,
                category: selectedCategory,
                amount: amount,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data) {
                    Swal.fire({
                        title: "Entry added",
                        icon: "success",
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        icon: "error",
                        text: "Something Went Wrong in Adding your Entry",
                    });
                }
            });
    }

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col sm={12} md={4}>
                    <h3>Add an Entry</h3>
                    <Form onSubmit={addEntry}>
                        <Form.Group>
                            <Form.Label>Type</Form.Label>
                            <Form.Control
                                as="select"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                defaultValue=""
                                required
                            >
                                <option hidden value="">
                                    Select Type
                                </option>
                                <option value="Income">Income</option>
                                <option value="Expense">Expense</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                as="select"
                                value={selectedCategory}
                                onChange={(e) =>
                                    setSelectedCategory(e.target.value)
                                }
                                defaultValue=""
                                required
                            >
                                <option hidden value="">
                                    Select Category
                                </option>
                                {category.map((item) => {
                                    return <option value={item}>{item}</option>;
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Add Entry
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
