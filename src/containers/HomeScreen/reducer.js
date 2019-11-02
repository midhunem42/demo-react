import { fromJS } from "immutable";
import { SET_USERS, SET_FILTERED_USER, RESET_LIST } from "./constants";

/*
 * HomeScreen reducer for storing all global data
-----------------------------------------------------------------------------------------
Programmer  Date               in Ver.    Changes    
-----------------------------------------------------------------------------------------   
Midhun     1/11/2019          v.0.1      initial Setup
-----------------------------------------------------------------------------------------
*/

const initialDetails = fromJS({
  filteredList: [],
  userList: []
});

const homeReducer = (state = initialDetails, action) => {
  switch (action.type) {
    case SET_USERS:
      return state.set("userList", action.payload);
    case SET_FILTERED_USER:
      return state.set("filteredList", action.payload);
    case RESET_LIST:
      return state.set("filteredList", []).set("userList", []);
    default:
      break;
  }
  return state;
};

export default homeReducer;
