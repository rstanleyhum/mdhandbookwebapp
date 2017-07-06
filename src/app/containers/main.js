
import React, { Component } from 'react';
import { firebaseConnect } from 'react-redux-firebase';

import logo from './images/logo.svg';
import './css/main.css';


class Main extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={ () => { console.log("Hello"); }}>Middle button</button>
      </div>
    );
  }
}

export default firebaseConnect()(Main);