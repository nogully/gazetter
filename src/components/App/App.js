import React, { Component } from 'react';
import * as api from '../../apiCalls';
import { connect } from 'react-redux';
import './App.css';
import { auth, provider } from '../../firebase';
import { logIn, populateTweets } from '../../actions/actions'
import News from '../News/News.js'
import { Route, withRouter } from 'react-router-dom';
import   today from '../../dateHelper'
// import PropTypes from 'prop-types';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    }
  }

  signIn = () =>  {  
    this.setState( {loading: true} );
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
    console.log(this.props.tweets.length)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gazetter</h1>
          {this.props.tweets.length? <p id="date">Last updated: { today }</p> : null }
        </header>
        <div className="User">
         { !this.props.tweets.length ? <button onClick={this.signIn}>Sign in with <i className="fab fa-twitter"></i> Twitter</button> : null }
         { this.state.loading && !this.props.tweets.length ? <img src="./newspapers.gif" alt="newspapers" /> : null }
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


