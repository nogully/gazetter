const trending = (state = [], action ) => {
  switch (action.type) {
    case 'POPULATE_TRENDING': 
      return action.tweets;
    default: 
      return state;
  }
}
export default trending;