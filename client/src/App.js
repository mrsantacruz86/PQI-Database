import React, { Component } from 'react';
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
    .then( data => this.setState({houses: data}))
    .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Hello World!</h1>
        </header>
        <ul>
          {
            this.state.houses.map( item => (
              <li>{item.number}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
