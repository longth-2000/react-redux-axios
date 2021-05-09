import productApi from './react-axios/productApi';
import Product from './react-sell/Product'
import Form from './react-sell/handleForm'
import React from 'react'
import axios from 'axios';
import Register from "./react-sell/user/Register"
import Login from "./react-sell/user/Login"
import history from "./react-sell/user/history";
import { BrowserRouter, Switch, Route } from "react-router-dom"
export default class App extends React.Component {

  render() {
    return (
      <BrowserRouter history={history}>
        <Switch> 
          <Route path="/" exact component={Login}></Route>
          <Route path="/register" exact component={Register}></Route>
          <Route path="/product" exact component={Product} ></Route>
          {/* <Route path="/form" exact component={Form} ></Route> */}
          <Route component={Form} ></Route>

         </Switch> 
      </BrowserRouter>
    )
  }
}