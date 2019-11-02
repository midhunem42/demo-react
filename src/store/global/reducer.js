import { fromJS } from "immutable";
import { SET_TOKEN, SET_LOGIN_ERROR } from "./constants";

/*
 * Global reducer for storing all global data
-----------------------------------------------------------------------------------------
Programmer  Date               in Ver.    Changes    
-----------------------------------------------------------------------------------------   
Midhun     1/11/2019          v.0.1      initial Setup
-----------------------------------------------------------------------------------------
*/

const initialDetails = fromJS({
  token: null,
  loginError: null
});

const globalReducer = (state = initialDetails, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return state.set("token", action.payload);
    case SET_LOGIN_ERROR:
      return state.set("loginError", action.payload);
    default:
      break;
  }
  return state;
};

export default globalReducer;
