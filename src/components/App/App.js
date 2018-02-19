import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
// import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { signIn } from '../../firebase'
import { auth, provider } from '../../firebase'

class App extends Component {
  constructor () {
    super(); 
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    //resolved promise from signin is a token and secret
    //result object
    //that's the user info that we'll use to the twitter api
    //populate tweets in the store
  }

  signIn = () =>  {  
    return auth.signInWithPopup(provider)
      .then((user) => {
        this.setState({user});
      }).then(this.fetchTweets())
  }

  fetchTweets = async () => {
    const response = await fetch('/api/gettweets');
    const data = await response.json();
      console.log(data);
    
    // this.setState({data})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gazetter</h1>
        </header>
        <div className="login">
        <button onClick={this.signIn}>Sign in</button>
        </div>
      </div>
    );
  }
}

export default App;


