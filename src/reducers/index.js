import { combineReducers } from 'redux';
import user from './userReducer'
import tweets from './tweetReducer'
import bookmarks from './bookmarkReducer'
import trending from './trendingReducer'

const rootReducer = combineReducers({
  user, 
  tweets, 
  bookmarks, 
  trending
});

export default rootReducer;