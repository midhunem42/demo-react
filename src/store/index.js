import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { rootReducer } from "./reducers";
import immutableTransform from "redux-persist-transform-immutable";

/*
 * redux-persist configuration
 * Author : Midhun E M
 * Date : 1th Nov 2019
 */
const persistConfig = {
  // if immutable js is used //#region
  transforms: [immutableTransform()],
  key: "root",
  storage,
  whitelist: ["globalReducer", "homeReducer"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

export default () => {
  let store = createStore(
    persistedReducer,
    {},
    applyMiddleware(sagaMiddleware)
  );
  // // then run the saga
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);
  return {
    store,
    persistor
  };
};
