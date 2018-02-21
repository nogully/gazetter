import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './News.css'
// import PropTypes from 'prop-types';

export class News extends Component {

  tweetCards = () => {
    const { tweets } = this.props;
    return tweets.map( tweet => {
      return (
        <div className="tweet" key={tweet.id}>
          <p>{tweet.text}</p> 
          <h5>– @{tweet.user.name}</h5> 
        </div>
      )})
     
  }

  render() {
    return (
      <div className="News">
      <h1> News </h1>
      {this.tweetCards()}
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  tweets: store.tweets
})

export default withRouter(connect(mapStateToProps, null)(News))