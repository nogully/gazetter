import { combineReducers } from 'redux';
import user from './userReducer'
import tweets from './tweetReducer'

const rootReducer = combineReducers({
  user, 
  tweets
});

export default rootReducer;