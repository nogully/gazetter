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

export const populateBookmarks = tweets => ({
  type: 'POPULATE_BOOKMARKS',
  tweets
})

export const addBookmark = tweet => ({
  type: 'ADD_BOOKMARK', 
  tweet
})

export const removeBookmark = tweet => ({
  type: 'REMOVE_BOOKMARK', 
  tweet
})