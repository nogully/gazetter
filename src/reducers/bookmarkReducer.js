const bookmarks = (state = [], action ) => {
  switch (action.type) {
    case 'POPULATE_BOOKMARKS':
    return [...action.bookmarks];
  case 'ADD_BOOKMARK':
    return [...state, action.tweet];
  case 'REMOVE_BOOKMARK':
    return state.filter(
      tweet => tweet.id !== action.tweet.id
    );
    default: 
      return state;
  }
}
export default tweets;