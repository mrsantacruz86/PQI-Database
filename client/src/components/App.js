import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import requireAuth from '../utils/requireAuth';
import PageNotFound from '../pages/PageNotFound';
import {
  HouseAuditsList,
  HouseAuditShow,
  HouseAuditCreate,
  HouseAuditEdit,
  HouseAuditDelete
} from './HouseAudits';
import MainFrame from '../pages/MainFrame';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MainFrame>
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

            <Route exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path="/public" component={Public} /> */}
            {/* <Route exact path="/car-audits" component={CarAudits} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </MainFrame>
      </BrowserRouter>
    );
  }
}

const Public = () => {
  return <h3>Public</h3>;
};
const Dashboard = () => {
  return <h3>Dashboard</h3>;
};
// const HouseAudits = () => {
//   return <h3>House Audits</h3>
// }
const CarAudits = () => {
  return <h3>Car Audits</h3>;
};

export default App;
