export const logIn = user => ({
  type: 'LOG_IN', 
  user 
})

export const populateTweets = tweets => ({
  type: 'POPULATE_TWEETS',
  tweets
})