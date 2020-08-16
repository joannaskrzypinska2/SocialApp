import React, { Component } from 'react';
import './App.css';

import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';

class App extends Component {
  constructor() {
    super();

    this.user = JSON.parse(localStorage.getItem('user'));

    this.state = {
      isUserLogded: this.user ? true : false,
    };
  }

  logIn = (event, login, password) => {
    const user = {
      username: login,
      password: password,
      ttl: 3600,
    };

    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    axios
      .post('https://akademia108.pl/api/social-app/user/login', JSON.stringify(user), {
        headers: headers,
      })
      .then((req) => {
        console.log(req.data);

        localStorage.setItem('user', JSON.stringify(req.data));
        this.setState({ isUserLogded: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  signUp = (event, username, email, password, passwordConf) => {
    const user = {
      username,
      email,
      password,
      passwordConf,
    };
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    axios
      .post('https://akademia108.pl/api/social-app/user/signup', JSON.stringify(user), {
        headers: headers,
      })
      .then((req) => {
        console.log(req.data);

        localStorage.setItem('user', JSON.stringify(req.data));
        this.setState({ isUserLogded: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {!this.state.isUserLogded && (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              )}
              {!this.state.isUserLogded && (
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
              )}
              {this.state.isUserLogded && (
                <li>
                  <Link to="/">Sign Out</Link>
                </li>
              )}
            </ul>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              {this.state.isUserLogded ? <Redirect to="/" /> : <Login logInMethod={this.logIn} />}
            </Route>
            <Route path="/signUp">
              {this.state.isUserLogded ? <Redirect to="/" /> : <SignUp signUp={this.signUp} />}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
