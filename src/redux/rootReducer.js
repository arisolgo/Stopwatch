import { combineReducers } from "redux";
import stopWatchReducer from "./StopWatch/stopwatch-reducer";
const rootReducer = combineReducers({
  time: stopWatchReducer,
});

export default rootReducer;
