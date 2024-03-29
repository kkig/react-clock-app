import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Clock />
        </div>
        <p className="App-intro">
          Hello {this.props.userName}!
        </p>
      </div>
    );
  }

}

export default App;
