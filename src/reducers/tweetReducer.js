const tweets = (state = [], action ) => {
  switch (action.type) {
    case 'POPULATE_TWEETS': 
      return action.tweets;
    default: 
      return state;
  }
}
export default tweets;