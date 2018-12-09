import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch as RouterSwitch, Link } from "react-router-dom";
// import LoginForm from './components/LoginForm';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LoginForm from './components/LoginForm';
import { Switch } from '@material-ui/core';
// import './App.css';

class App extends Component {
  state = {
    houses: []
  };

  componentDidMount = () => {
    this.getHouses();
  }

  getHouses = () => {
    fetch("/api/houses")
      .then(res => res.json())
      .then(data => this.setState({ houses: data }))
      .catch(err => console.log(err));
  };


  render() {
    const notFound = () => <h1>404: Te page is not found</h1>;
    return (
      <Router>
        <div className="App">
          <RouterSwitch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={LoginForm} />
            <Route component={notFound} />
          </RouterSwitch>
        </div>
      </Router>

    );
  }
}

export default App;
