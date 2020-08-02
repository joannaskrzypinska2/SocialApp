import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Nav from './Nav';
import SignUp from './SignUp';
import SignOut from './SignOut';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signUp">
              <SignUp />
            </Route>
            <Route path="/signOut">
              <SignOut />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
