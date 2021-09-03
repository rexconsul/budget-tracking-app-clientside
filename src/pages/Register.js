// Base
import React, { useState, useEffect, useContext } from "react";
import { Redirect, useHistory } from "react-router-dom";

// App import
import UserContext from "UserContext";

// Bootstrap
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

// Swal
import Swal from "sweetalert2";

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const { user } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        let isNameNotEmpty = name !== "";
        let isEmailNotEmpty = email !== "";
        let isPasswordNotEmpty = password !== "";
        let isPasswordMatch = password === passwordConfirm;

        if (
            isNameNotEmpty &&
            isEmailNotEmpty &&
            isPasswordNotEmpty &&
            isPasswordMatch
        ) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, email, password, passwordConfirm]);

    function register(e) {
        e.preventDefault();

        fetch("https://mighty-spire-05206.herokuapp.com/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data) {
                    Swal.fire({
                        title: "Welcome!",
                        icon: "success",
                        text: "You are now Registered",
                    });

                    history.push("/login");
                } else {
                    Swal.fire({
                        title: "Error",
                        icon: "error",
                        text: "Something Went Wrong With Your Registration",
                    });
                }
            });

        setName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    }

    if (user.accessToken !== null) {
        return <Redirect to="/" />;
    }

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col sm={12} md={4}>
                    <h3>Register</h3>
                    <Form onSubmit={register}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                value={passwordConfirm}
                                onChange={(e) =>
                                    setPasswordConfirm(e.target.value)
                                }
                                required
                            />
                        </Form.Group>
                        <Button
                            variant="success"
                            type="submit"
                            disabled={isDisabled}
                        >
                            Register
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
