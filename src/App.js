// Base
import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// App import
import UserContext from "UserContext";

// App components
import AppNavbar from "components/AppNavbar";
import ProtectedRoute from "components/ProtectedRoute";

// Page components
import Home from "pages/Home";
import Login from "pages/Login";
import AddEntry from "pages/AddEntry";
import AddCategory from "pages/AddCategory";
import ViewExpense from "pages/ViewExpense";
import ViewIncome from "pages/ViewIncome";
import Register from "pages/Register";
import NotFound from "pages/NotFound";

export default function App() {
    const [user, setUser] = useState({
        accessToken: localStorage.getItem("accessToken"),
    });

    const unsetUser = () => {
        localStorage.clear();
        setUser({ accessToken: null });
    };

    return (
        <UserContext.Provider value={{ user, setUser, unsetUser }}>
            <BrowserRouter>
                <AppNavbar user={user} />
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <ProtectedRoute exact path="/" component={Home} />
                    <ProtectedRoute
                        exact
                        path="/add-entry"
                        component={AddEntry}
                    />
                    <ProtectedRoute
                        exact
                        path="/add-category"
                        component={AddCategory}
                    />
                    <ProtectedRoute
                        exact
                        path="/view-expense"
                        component={ViewExpense}
                    />
                    <ProtectedRoute
                        exact
                        path="/view-income"
                        component={ViewIncome}
                    />
                    <Route exact path="/register" component={Register} />
                    <ProtectedRoute exact path="/404" component={NotFound} />
                    <Redirect to="/404" />
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}
