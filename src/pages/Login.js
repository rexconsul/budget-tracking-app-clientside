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

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    const { user, setUser } = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        let isEmailNotEmpty = email !== "";
        let isPasswordNotEmpty = password !== "";
        let isMounted = true;

        if (isMounted && isEmailNotEmpty && isPasswordNotEmpty) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
        return () => {
            isMounted = false;
        };
    }, [email, password]);

    function login(e) {
        e.preventDefault();

        fetch("http://localhost:4000/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);

                if (data.accessToken !== undefined) {
                    localStorage.setItem("accessToken", data.accessToken);
                    setUser({ accessToken: data.accessToken });

                    Swal.fire({
                        title: "Welcome Back!",
                        icon: "success",
                        text: "Login successful",
                    });

                    history.push("/");
                } else {
                    Swal.fire({
                        title: "Oooops!",
                        icon: "error",
                        text: "Something Went Wrong with your Login",
                    });
                }

                setEmail("");
                setPassword("");
            });
    }

    if (user.accessToken !== null) {
        return <Redirect to="/login" />;
    }

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col sm={12} md={4}>
                    <h3>Login</h3>
                    <Form onSubmit={login}>
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
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>
                        <Button
                            variant="success"
                            type="submit"
                            disabled={isDisabled}
                        >
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
