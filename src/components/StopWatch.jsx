import React, { useState, useEffect } from "react";
import StopWatchButton from "../assets/Styles/components/StopWatchButton";
import StopWatchTitle from "../assets/Styles/components/StopWatchTitle";
import { connect } from "react-redux";
import * as stopWatchActions from "../redux/StopWatch/stopwatch-actions";
import "../assets/Styles/css/StopWatch.css";

function StopWatch({ isRunning, start, pause }) {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [hundredSeconds, setHundredSeconds] = useState(0);
  const timeOutInterval = 10;
  var timer;

  const setStopWatch = () => {
    timer = setInterval(() => {
      setHundredSeconds((hundredSeconds) => hundredSeconds + 1);
    }, timeOutInterval);

    if (hundredSeconds === 100) {
      setHundredSeconds(0);
      setSeconds((seconds) => seconds + 1);
    }
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((minutes) => minutes + 1);
    }
  };

  const reset = () => {
    setMinutes(0);
    setSeconds(0);
    setHundredSeconds(0);
  };

  useEffect(() => {
    if (isRunning) {
      setStopWatch();
      return () => clearInterval(timer);
    }
    // eslint-disable-next-line
  }, [hundredSeconds, isRunning]);

  const formatWatchDigits = (digit = 0) => {
    const digitToTime = digit.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
    return digitToTime;
  };
  return (
    <div>
      <StopWatchTitle color={"white"}>React Stopwatch</StopWatchTitle>
      <div className="stop-watch-container">
        <div className="stop-watch">
          <div className="stop-watch-digits">
            <h1>{formatWatchDigits(minutes) + ":"}</h1>
            <h1>{formatWatchDigits(seconds)}</h1>
            <h3>{formatWatchDigits(hundredSeconds)}</h3>
          </div>
        </div>
        <div className="stop-watch-footer">
          <StopWatchButton action={() => start()} skin={"play"}>
            Start
          </StopWatchButton>
          <StopWatchButton action={() => pause()}>Pause</StopWatchButton>
          <StopWatchButton action={() => reset()}>Reset</StopWatchButton>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isRunning: state.time.isRunning,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    start: () => dispatch(stopWatchActions.start()),
    pause: () => dispatch(stopWatchActions.pause()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StopWatch);
