import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage';
// import requireAuth from './utils/requireAuth';
import PageNotFound from './pages/PageNotFound/PageNotFound';


class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <RouterSwitch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={SignUpPage} />
            {/* <Route exact path="/house-audits" component={HouseAudits} /> */}
            {/* <Route path="/house-audits/new" component={NewHouseAudit} /> */}
            <Route component={PageNotFound} />
          </RouterSwitch>
        </div>
      </Router>
    );
  }
}

export default App;