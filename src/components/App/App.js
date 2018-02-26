import { connect } from 'react-redux';
import './App.css';
import { auth } from '../../firebase';
import { logIn, populateTweets } from '../../actions/actions'
import News from '../News/News.js'
import Welcome from '../Welcome/Welcome.js'
import { Route, withRouter, NavLink } from 'react-router-dom';
import today from '../../dateHelper'
import { array, object, func } from 'prop-types';

export class App extends Component {

  logOut = () => {
    auth.signOut();
    this.props.logIn({})
    this.props.populateTweets([])
  }

  fillHeader = () => {
    const user = 'noragully'
    return (
      <div className='user-header'>
          <NavLink to='/' className="App-title">Gazetter</NavLink>
        <div className="header-bottom">
          <p id='motto'>All the news that's fit to tweet</p>
          <p id="date">Last updated: { today }</p>
          <NavLink to="/" id="signout" onClick={this.logOut}>
            Sign out @{user}
          </NavLink>
        </div>
        
      </div>
    )
  }

  render() {
    const { tweets } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          { tweets.length ? this.fillHeader() : 
            <NavLink to='/' className="App-title">Gazetter</NavLink> }
        </header>
        <Route exact path='/' component={Welcome} />
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

App.propTypes = {
  tweets: array.isRequired, 
  user: object.isRequired, 
  logIn: func.isRequired, 
  populateTweets: func.isRequired
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


