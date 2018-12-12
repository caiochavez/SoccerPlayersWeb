export const signin = ( user, token ) => {
  return {
    type: 'SIGNIN',
    payload: { user, token }
  }
}

export const logout = () => {
  return {
    type: 'LOGOUT'
  }
}