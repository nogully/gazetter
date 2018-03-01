import { combineReducers } from 'redux';
import user from './userReducer'
import tweets from './tweetReducer'
import bookmarks from './bookmarkReducer'

const rootReducer = combineReducers({
  user, 
  tweets, 
  bookmarks
});

export default rootReducer;