import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import './News.css'
import { array } from 'prop-types';

export class News extends Component {

  tweetCards = () => {
    const { tweets } = this.props;
    return tweets.map( tweet => {
      return (
        <div className="tweet" key={tweet.id}>
          { tweet.entities.media ? <img src={tweet.entities.media[0].media_url} alt="tweet"/> : null }
          <h2>{tweet.user.name}</h2> 
          <p>{tweet.full_text}</p> 
          <h5><i className="fas fa-heart"></i> {tweet.favorite_count}</h5>
        </div>
      )})
     
  }

  render() {
    return (
      <div className="News">
      {this.tweetCards()}
      </div>
    )
  }
}

export const mapStateToProps = (store) => ({
  tweets: store.tweets
})

News.propTypes = {
  tweets: array
}

export default withRouter(connect(mapStateToProps, null)(News))