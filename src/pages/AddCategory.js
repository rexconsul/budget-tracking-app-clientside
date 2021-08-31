// Base
import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

// App import
import UserContext from "UserContext";

// Bootstrap Components
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";

export default function AddCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [type, setType] = useState("");
  const { user } = useContext(UserContext);
  const history = useHistory();

  function addCategory(e) {
    e.preventDefault();

    fetch("http://localhost:4000/users/add-category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.accessToken}`,
      },
      body: JSON.stringify({
        name: categoryName,
        type: type,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.isAdded) {
          Swal.fire({
            title: "Category added",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error",
            icon: "error",
            text: "Something Went Wrong in Adding the Category",
          });
        }
      });
  }

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={12} md={4}>
          <h3>Add Category</h3>
          <Form onSubmit={addCategory}>
            <Form.Group>
              <Form.Label>Category Name</Form.Label>
              <Form.Control
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                value={type}
                onChange={(e) => setType(e.target.value)}
                defaultValue=""
                required
              >
                <option hidden value="">
                  Select a Type
                </option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
              </Form.Control>
            </Form.Group>
            <Button variant="success" type="submit">
              Add Category
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
