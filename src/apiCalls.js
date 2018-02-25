export const getTweets = async (token, secret) => {
  try {
    const response = await fetch('http://localhost:3001/api/gettweets')
    const parsed = await response.json();
    if (response) {
      return cleanTweets(parsed);    
    } else {
      throw new Error("Error getting tweets");
    }
  } catch (error) { 
    throw (error);
  }
};

export const cleanTweets = (tweets) => {
  if (tweets === null) {
    return undefined;
  }

  const filtered = tweets.filter(tweet => newsOutlets.indexOf(tweet.user.screen_name) >= 0 );
  
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
  });
};