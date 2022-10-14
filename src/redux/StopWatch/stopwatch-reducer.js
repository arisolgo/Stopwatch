import * as actionTypes from "./stopwatch-types";
const INITIAL_STATE = {
  isRunning: false,
};

const stopWatchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.START:
      return { isRunning: true };
    case actionTypes.PAUSE:
      return { isRunning: false };
    default:
      return state;
  }
};

export default stopWatchReducer;
