import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch as RouterSwitch } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignUpPage from './pages/SignUpPage';
import requireAuth from './utils/requireAuth';
import PageNotFound from './pages/PageNotFound';
import HouseAuditPage from './pages/HouseAuditPage';
import MainFrame from './pages/MainFrame';
import './App.css';


class App extends Component {

  render() {

    return (
      <Router>
        <MainFrame>
          <RouterSwitch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={SignUpPage} />
            <Route exact path="/house-audits" component={requireAuth(HouseAuditPage)} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/public" component={Public} />
            <Route exact path="/car-audits" component={CarAudits} />
            {/* <Route path="/house-audits/new" component={NewHouseAudit} /> */}
            <Route component={PageNotFound} />
          </RouterSwitch>
        </MainFrame>
      </Router>
    );
  }
}

const Public = () => {
  return <h3>Public</h3>
}
const Dashboard = () => {
  return <h3>Dashboard</h3>
}
// const HouseAudits = () => {
//   return <h3>House Audits</h3>
// }
const CarAudits = () => {
  return <h3>Car Audits</h3>
}

export default App;