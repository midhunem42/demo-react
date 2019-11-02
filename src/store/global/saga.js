import { put, takeEvery, select, fork, call, delay } from "redux-saga/effects";
import { LOGIN_SUBMIT } from "./constants";
import authDB from "../../utils/authDB.json";
import history from "../../history";
import { setLoginResponse, setLoginError } from "./actions";

// eslint-disable-next-line require-yield
function* loginSubmit(action) {
  const request = action.payload;
  try {
    if (
      request.username === authDB.username &&
      request.password === authDB.password
    ) {
      yield put(setLoginResponse("tokenerwerw3r"));
      history.push("/home");
    } else {
      yield put(setLoginError("Username or password is incorrect"));
    }
  } catch (error) {

  }
}

function* globalSaga() {
  yield takeEvery(LOGIN_SUBMIT, loginSubmit);
}

export default globalSaga;
