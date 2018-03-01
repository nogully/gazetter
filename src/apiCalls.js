import { newsOutlets } from './newsOutlets';

export const getTweets = async (token, secret) => {
  try {
    const response = await fetch('http://localhost:3001/api/gettweets')
    if (response.status > 226) {
      throw new Error("Error getting tweets");
    } else {
      const parsed = await response.json();
      return cleanTweets(parsed);  
    }
  } catch (error) { 
    throw (error);
  }
};

export const trendingTweets = async (user) => {
  const { token, secret, username } = user;
  try {
    const response = await fetch('http://localhost:3001/api/user', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: { 'Content-Type': 'application/json' }
    })
    if (response.status > 226) {
      throw new Error("Error authenticating");
    } else {
      const parsed = await response.json();
      console.log(cleanTweets(parsed));  
    }
  } catch (error) { 
    throw (error);
  }
};

export const cleanTweets = (tweets) => {
  if (tweets === null) {
    return undefined;
  } else {
    const filtered = tweets.filter(tweet => newsOutlets.indexOf(tweet.user.screen_name.toLowerCase()) >= 0 );
    
    return filtered.map(tweet => {
      const {
        id,
        full_text,
        entities, 
        user, 
        retweeted_status, 
        favorite_count
      } = tweet;
      return {
        id,
        full_text, 
        entities, 
        user, 
        retweeted_status, 
        favorite_count
      }
    }).sort((a, b) => b.favorite_count - a.favorite_count);
  }
};