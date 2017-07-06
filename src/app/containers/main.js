
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';

import logo from './images/logo.svg';
import './css/main.css';



const Main = ({ onSignUp, onLogin }) => (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onSignUp}>Sign Up</button>
        <button onClick={onLogin}>Login</button>
      </div>
    );


Main.propTypes = {
    onSignUp: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired
}


const mapStateToProps = state => ({
});


const mapDispatchToProps = dispatch => ({
    onSignUp: () => { console.log("Sign Up") },
    onLogin: () => { console.log("Login") },
});


export default connect(mapStateToProps, mapDispatchToProps)(firebaseConnect()(Main));
