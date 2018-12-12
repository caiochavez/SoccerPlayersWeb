const INITIAL_STATE = { user: null, token: '' }

export default ( state = INITIAL_STATE, action ) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SIGNIN':
      return { ...state, user: action.payload.user, token: action.payload.token }
    case 'LOGOUT':
      return { ...state, user: null, token: '' }
    default: 
      return state
  }
}