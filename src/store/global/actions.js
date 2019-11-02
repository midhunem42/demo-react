import { SET_TOKEN, LOGIN_SUBMIT, SET_LOGIN_ERROR, LOGOUT } from "./constants";

export const setLoginResponse = response => {
  return { type: SET_TOKEN, payload: response };
};

export const loginSubmit = credentials => {
  return { type: LOGIN_SUBMIT, payload: credentials };
};

export const setLoginError = error => {
  return { type: SET_LOGIN_ERROR, payload: error };
};

export const logOutUser = () => {
  return { type: LOGOUT };
};
