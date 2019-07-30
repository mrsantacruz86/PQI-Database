import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import requireAuth from '../utils/requireAuth';
import PageNotFound from '../pages/PageNotFound';
import HNavbar from './HNavbar';
import history from '../history';
import {
  HouseAuditsList,
  HouseAuditShow,
  HouseAuditCreate,
  HouseAuditEdit,
  HouseAuditDelete
} from './HouseAudits';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <HNavbar />
        <div className="container-fluid fixed-nav-top">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={SignUpPage} />
            {/* House audit Routes */}
            <Route exact path="/houseaudits" component={requireAuth(HouseAuditsList)} />
            <Route exact path="/houseaudits/new" component={requireAuth(HouseAuditCreate)} />
            <Route exact path="/houseaudits/edit/:id" component={requireAuth(HouseAuditEdit)} />
            <Route exact path="/houseaudits/delete/:id" component={requireAuth(HouseAuditDelete)} />
            {/* this should be always the last route so it does not interfere with the /new */}
            <Route exact path="/houseaudits/:id" component={requireAuth(HouseAuditShow)} />

            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
