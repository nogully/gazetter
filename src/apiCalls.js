export const fetchTweets = async (token, secret) => {
  try {
    const response = await fetch(`https://api.twitter.com`)
    const parsed = await response.json();
    if (response) {
      console.log(parsed)
      return parsed;    
    } else {
      throw new Error("Error in fetchTweets");
    }
  } catch (error) { 
    throw new Error("Error in fetchTweets");
  }
};

