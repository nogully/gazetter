import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../News/News.css';
import { array } from 'prop-types';
import Article from '../Article/Article';
import {addBookmark, removeBookmark, populateTrending} from '../../actions/actions'
import * as api from '../../apiCalls';


export class Trending extends Component {

  getTrending = async () => {
    const response = await api.trendingTweets();
    console.log(response)
  }

  handleClick = (event) => {
    console.log('click')
    const { id } = event.target
    const { tweets, bookmarks } = this.props;
    const clicked = tweets.find(tweet => tweet.id === parseInt(id, 10));
    const tweet = Object.assign({}, { ...clicked });
    if (!bookmarks.find(tweet => tweet.id === parseInt(id, 10))) {
      this.props.addBookmark(tweet);
    } else {
      this.props.removeBookmark(tweet)
    }
  }

  tweetCards = () => {
    const { trending } = this.props;
    return trending.map( tweet => {
      return (
        <Article key={tweet.id} tweet={tweet} handleClick={this.handleClick} />
      );
    });
  }; 

  render() {
    return (
      <div className="Trending">
        <button onClick={this.getTrending}>Refresh</button>
        { this.tweetCards() }
      </div>
    );
  }
}

export const mapStateToProps = (store) => ({
  tweets: store.tweets, 
  bookmarks: store.bookmarks,
  trending: store.trending
});

export const mapDispatchToProps = (dispatch) => ({
  addBookmark: tweet => dispatch(addBookmark(tweet)), 
  removeBookmark: tweet => dispatch(removeBookmark(tweet)), 
  populateTrending: () => dispatch(populateTrending())
})

Trending.propTypes = {
  tweets: array.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Trending));