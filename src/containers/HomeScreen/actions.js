import {
  FETCH_USERS,
  ADD_NEW_USER,
  FILTER_USER,
  SET_USERS,
  SET_FILTERED_USER,
  RESET_LIST
} from "./constants";

export const fetchUserList = () => {
  return { type: FETCH_USERS };
};
export const addUser = user => {
  return { type: ADD_NEW_USER, payload: user };
};

export const filterUser = search => {
  return { type: FILTER_USER, payload: search };
};

export const setUserList = userList => {
  return { type: SET_USERS, payload: userList };
};

export const setFilteredUserList = userList => {
  return { type: SET_FILTERED_USER, payload: userList };
};
export const resetList = () => {
  return { type: RESET_LIST };
};
