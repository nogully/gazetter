import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../News/News.css';
import { array } from 'prop-types';
import Article from '../Article/Article';
import {addBookmark, removeBookmark} from '../../actions/actions'


export class Bookmarks extends Component {

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
    const { bookmarks } = this.props;
    return bookmarks.map( tweet => {
      return (
        <Article key={tweet.id} tweet={tweet} handleClick={this.handleClick} />
      );
    });
  }; 

  render() {
    return (
      <div className="News">
        { this.tweetCards() }
      </div>
    );
  }
}

export const mapStateToProps = (store) => ({
  tweets: store.tweets, 
  bookmarks: store.bookmarks
});

export const mapDispatchToProps = (dispatch) => ({
  addBookmark: tweet => dispatch(addBookmark(tweet)), 
  removeBookmark: tweet => dispatch(removeBookmark(tweet))
})

Bookmarks.propTypes = {
  tweets: array.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Bookmarks));