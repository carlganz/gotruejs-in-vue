const loggedIn = state => {
  return !!state.currentUser;
};

const currentUser = state => {
  return state.currentUser;
};

export default {
  loggedIn,
  currentUser
};
