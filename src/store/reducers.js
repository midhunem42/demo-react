import { combineReducers } from "redux";
import globalReducer from "./global/reducer";
import homeReducer from "../containers/HomeScreen/reducer";

/**
 * Combining all the reducers
 */
const rootReducer = combineReducers({
  globalReducer,
  homeReducer
});
export { rootReducer };
