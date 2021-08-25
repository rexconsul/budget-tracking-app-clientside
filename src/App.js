// Base
import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

// App components
import AppNavbar from 'components/AppNavbar'

// Page components
import Home from 'pages/Home';
import Login from 'pages/Login';
import AddEntry from 'pages/AddEntry';
import AddCategory from 'pages/AddCategory';
import ViewExpense from 'pages/ViewExpense';
import ViewIncome from 'pages/ViewIncome';
import Register from 'pages/Register'
import NotFound from 'pages/NotFound'

export default function App(){
  return (
    <BrowserRouter>
      <AppNavbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/add-entry" component={AddEntry}/>
        <Route exact path="/add-category" component={AddCategory}/>
        <Route exact path="/view-expense" component={ViewExpense}/>
        <Route exact path="/view-income" component={ViewIncome}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  )
}