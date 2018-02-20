const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN': 
      return action.user;
    default: 
      return state;
  }
}

export default user;