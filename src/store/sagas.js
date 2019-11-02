import { fork, all } from "redux-saga/effects";
import globalSaga from "./global/saga";
import homeSaga from "../containers/HomeScreen/saga";

export default function* rootSaga() {
  yield all([fork(globalSaga), fork(homeSaga)]);
}
