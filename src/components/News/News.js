import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './News.css'
// import PropTypes from 'prop-types';

export class News extends Component {

  tweetCards = () => {
    const { tweets } = this.props;
    return tweets.map( tweet => {
      return <p>{tweet.text}</p>
    })
     
  }

  render() {
    return (
      <div>
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