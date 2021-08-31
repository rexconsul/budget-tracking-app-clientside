// Base
import React, { Fragment, useContext } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";

// App import
import UserContext from "UserContext";

// Bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function AppNavBar() {
  const { user, unsetUser } = useContext(UserContext);
  const history = useHistory();

  const logout = () => {
    unsetUser();
    history.push("/login");
  };

  let rightNav =
    user.accessToken === null ? (
      <Fragment>
        <Nav.Link as={NavLink} to="/login">
          Login
        </Nav.Link>
        <Nav.Link as={NavLink} to="/register">
          Register
        </Nav.Link>
      </Fragment>
    ) : (
      <Fragment>
        <Nav.Link onClick={logout}>Log-out</Nav.Link>
      </Fragment>
    );

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        Budget Tracking
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">{rightNav}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
