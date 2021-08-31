// Base
import React from "react";
import { Redirect, Route } from "react-router";

export default function ProtectedRoute({ component: Component, ...rest }) {
    const isAuth = localStorage.getItem("accessToken");

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
}
