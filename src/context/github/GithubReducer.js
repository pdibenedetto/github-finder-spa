const githubReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        // spread across the current state, i.e. return current state as is
        ...state,
        users: action.payload,
        loading: false,
      }
      case 'SET_LOADING':
        return {
          ...state,
          loading: true,
        }
    default:
      return state
  }
}

export default githubReducer
