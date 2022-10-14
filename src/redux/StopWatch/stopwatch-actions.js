import * as actionsTypes from "./stopwatch-types";

export const start = () => {
  return {
    type: actionsTypes.START,
    payload: {},
  };
};

export const pause = () => {
  return {
    type: actionsTypes.PAUSE,
    payload: {},
  };
};
