import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { signIn } from '../../firebase'
import { auth, provider } from '../../firebase'
import News from '../News/News.js'

export class App extends Component {
  constructor () {
    super(); 
  }

  signIn = () =>  {  
    return auth.signInWithPopup(provider)
      .then((user) => {
        this.setState({user});
      }).then(this.fetchTweets())
  }

  fetchTweets = async () => {
    console.log('hi i am fetchTweets')
    const response = await fetch('http://localhost:3001/api/gettweets');
    const data = await response.json()
    console.log(await data);
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gazetter</h1>
        </header>
        <div className="sign-in">
          <button onClick={this.signIn}>Sign in</button>
        </div>
      </div>
    );
  }
}
export const mapStateToProps = (state) => ({
  // user: store.user,
  // tweets: store.tweets
})

export const mapDispatchToProps = () => ({
  // addUser: user => dispatch(addUser(user))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


