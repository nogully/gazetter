import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { array, object, func } from 'prop-types';
import { auth, provider } from '../../firebase';
import { logIn, populateTweets } from '../../actions/actions'
import * as api from '../../apiCalls';


export class Welcome extends Component {
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
    return (
      <div className="Welcome">
        <p id='tagline'>"All the news that's fit to tweet"</p>
        <button onClick={this.signIn}>Sign in with <i className="fab fa-twitter"></i> Twitter</button>
        { this.state.loading && !this.props.tweets.length ? 
          <img className="loading-gif"src="./newspapers.gif" alt="newspapers" /> : null }
      </div>
    )
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

Welcome.propTypes = {
  tweets: array.isRequired, 
  user: object.isRequired,
  logIn: func.isRequired,
  populateTweets: func.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Welcome))