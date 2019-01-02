import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

import SignUpPage from './pages/SignUpPage';
import requireAuth from './utils/requireAuth';


class App extends Component {

  render() {
    const notFound = () => <h1>404: Te page is not found</h1>;

    return (
      <Router>
        <div>
          <RouterSwitch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={requireAuth(Dashboard)} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={SignUpPage} />
            <Route component={notFound} />
          </RouterSwitch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps)(App);