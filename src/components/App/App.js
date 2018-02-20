import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import * as apiCalls from '../../apiCalls';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './App.css';
import { signIn } from '../../firebase'
import { auth, provider } from '../../firebase';
import { logIn, populateTweets } from '../../actions/actions'
import News from '../News/News.js'

export class App extends Component {
  constructor () {
    super(); 
  }

  signIn = () =>  {  
    return auth.signInWithPopup(provider)
      .then((user) => {
        this.props.logIn(user);
      }).then(this.fetchTweets())
  }

  fetchTweets = async () => {
    console.log('hi i am fetchTweets')
    const response = await fetch('http://localhost:3001/api/gettweets');
    const data = await response.json()
    this.props.populateTweets(data)
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
export const mapStateToProps = (store) => ({
  user: store.user,
  tweets: store.tweets
})

export const mapDispatchToProps = (dispatch) => ({
  logIn: user => dispatch(logIn(user)), 
  populateTweets: tweets => dispatch(populateTweets(tweets))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


