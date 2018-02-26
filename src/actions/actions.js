export const logIn = user => ({
  type: 'LOG_IN', 
  user 
})

export const logOut = () => ({
  type: 'LOG_OUT'
})

export const populateTweets = tweets => ({
  type: 'POPULATE_TWEETS',
  tweets
})