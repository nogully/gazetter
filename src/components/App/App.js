import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
// import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';

// var provider = new firebase.auth.TwitterAuthProvider();

class App extends Component {
  constructor () {
    super(); 
    this.state = {
      email: '', 
      password: '', 
      error: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gazetter</h1>
        </header>
        <div className="login">
        <p>Log in with Twitter</p>
          <form>
            <input type="text" id="email" />
            <input type="password" id="password" />
            <input type="submit" id="submit-button" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
