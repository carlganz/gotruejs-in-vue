import GoTrue from "gotrue-js";
export const API_URL = "/.netlify";
export const API_IDENTITY_URL = `${API_URL}/identity`;
export const auth = new GoTrue({
  APIUrl: API_IDENTITY_URL,
  audience: "",
  setCookie: true
});

const state = {
  currentUser: auth.currentUser(),
  loading: false,
  loggedIn: false,
  token: null,
  notifications: []
};

export default state;
