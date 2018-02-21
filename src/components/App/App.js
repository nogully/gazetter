import React, { Component } from 'react';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import './App.css';
import { auth, provider } from '../../firebase';
import { logIn, populateTweets } from '../../actions/actions'
import News from '../News/News.js'
import { Route, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

export class App extends Component {

  signIn = () =>  {  
    return auth.signInWithPopup(provider)
      .then((user) => {
        this.props.logIn(user);
      }).then(this.fetchTweets())
  }

  fetchTweets = async () => {
    const tweets = await api.getTweets();
    this.props.populateTweets(tweets)
    this.props.history.push('/news')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gazetter</h1>
        </header>
        <div className="sign-in">
         { !this.props.tweets.length ? <button onClick={this.signIn}>Sign in</button> : null }
        </div>
        <Route path='/news' component={News} />
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


