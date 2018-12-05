import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import LoginForm from './components/LoginForm';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
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
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route exact path="/login" component={<h1>This page is not Ready yet</h1>} />
        </div>
      </Router>

    );
  }
}

export default App;
