/* eslint-disable require-yield */
import { put, takeEvery, select, fork, call, delay } from "redux-saga/effects";
import { FETCH_USERS, ADD_NEW_USER, FILTER_USER } from "./constants";
import Api from "../../api";
import ApiConstants from "../../api/Apiconstants";
import { setUserList, setFilteredUserList } from "./actions";
import history from "../../history";

function* fetchUsers(action) {
  try {
    const response = yield call(
      Api,
      ApiConstants.FETCH_USERS,
      null,
      "GET",
      null
    );
    yield put(setUserList(response.results));
    yield put(setFilteredUserList(response.results));
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
}

function* addNewUser(action) {
  const { payload } = action;
  const state = yield select(state => state);
  const homeReducer = state.homeReducer.toJS();
  const { userList } = homeReducer;
  try {
    const newUser = {
      user: {
        gender: payload.gender,
        name: {
          title: payload.title,
          first: payload.first,
          last: payload.last
        },
        email: payload.email,
        username: payload.username,
        password: payload.password,

        dob: payload.dob,
        phone: payload.phone
      }
    };
    userList.push(newUser);
    yield put(setUserList(userList));
    history.push("/home");
  } catch (error) {}
}

function* searchUser(action) {
  const { payload } = action;
  const state = yield select(state => state);
  const homeReducer = state.homeReducer.toJS();
  const { userList } = homeReducer;
  const newList = userList.filter(
    x =>
      x.user.name.first.toLowerCase().includes(payload) ||
      x.user.name.last.toLowerCase().includes(payload) ||
      x.user.name.title.toLowerCase().includes(payload)
  );
  try {
    yield put(setFilteredUserList(newList));
  } catch (error) {}
}
function* homeSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers);
  yield takeEvery(ADD_NEW_USER, addNewUser);
  yield takeEvery(FILTER_USER, searchUser);
}

export default homeSaga;
