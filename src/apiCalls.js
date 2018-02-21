export const getTweets = async (token, secret) => {
  try {
    const response = await fetch('http://localhost:3001/api/gettweets')
    const parsed = await response.json();
    if (response) {
      return parsed;    
    } else {
      throw new Error("Error in fetchTweets");
    }
  } catch (error) { 
    throw new Error("Error in fetchTweets");
  }
};

