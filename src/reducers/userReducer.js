const user = (state = {}, action) => {
  switch (action.type) {
    case 'LOG_IN': 
      return action.user;
    case 'LOG_OUT':
      return {};
    default: 
      return state;
  }
}

export default user;