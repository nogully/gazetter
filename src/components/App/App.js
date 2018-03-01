import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { auth } from '../../firebase';
import { logOut, populateTweets } from '../../actions/actions';
import News from '../News/News.js';
import Welcome from '../Welcome/Welcome.js';
import { Route, withRouter, NavLink } from 'react-router-dom';
import today from '../../dateHelper';
import { array, object, func } from 'prop-types';
import Bookmarks from '../Bookmarks/Bookmarks'

export class App extends Component {
  logOut = () => {
    auth.signOut();
    this.props.logOut();
    this.props.populateTweets([]);
  }

  fillHeader = () => {
    const user = 'noragully';
    return (
      <div className='user-header'>
        <NavLink to='/' className="App-title">Gazetter</NavLink>
        <div className="header-bottom">
          <p id='motto'>All the news that&apos;s fit to pwint</p>
          <p id="date">Last updated: { today }</p>
          <NavLink to="/" id="signout" onClick={this.logOut}>
            Sign out @{user}
          </NavLink>
        </div>
      </div>
    );
  };

  render() {
    const { tweets } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          { tweets.length ? this.fillHeader() : 
            <NavLink to='/' className="App-title">Gazetter</NavLink> }
        </header>
        <section className="section-title">
          {tweets.length ? <NavLink to='/news' className="section">News</NavLink> : null }
          {tweets.length ? <NavLink to='/bookmarks' className="section">Bookmarks</NavLink> : null }
        </section>
        <Route exact path='/' component={Welcome} />
        <Route path='/news' component={News} />
        <Route path='/bookmarks' component={Bookmarks} />
      </div>
    );
  }
}

export const mapStateToProps = (store) => ({
  user: store.user,
  tweets: store.tweets
});

export const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut()), 
  populateTweets: tweets => dispatch(populateTweets(tweets))
});

App.propTypes = {
  tweets: array.isRequired, 
  user: object.isRequired, 
  logOut: func.isRequired, 
  populateTweets: func.isRequired
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


