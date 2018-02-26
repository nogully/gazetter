import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './News.css'
import { array } from 'prop-types';
import Article from '../Article/Article'

export class News extends Component {

  tweetCards = () => {
    const { tweets } = this.props;
    return tweets.map( tweet => {
      return (
        <Article key={tweet.id} tweet={tweet} />
      )})
  }

  render() {
    return (
      <div className="News">
      { this.tweetCards() }
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  tweets: store.tweets
})

News.propTypes = {
  tweets: array.isRequired
}

export default withRouter(connect(mapStateToProps, null)(News))