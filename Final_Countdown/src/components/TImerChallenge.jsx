import React from "react";

import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge(props) {
  const timer = React.useRef();
  const dialog = React.useRef();

  const [timeRemaining, setTimeRemaining] = React.useState(
    props.targetTime * 1000
  );

  const timerIsActive =
    0 < timeRemaining && timeRemaining < props.targetTime * 1000;

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prev) => {
        return prev - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset() {
    setTimeRemaining(props.targetTime * 1000);
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={props.targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{props.title}</h2>
        <p className="challenge-time">
          {props.targetTime} second{props.targetTime === 1 ? "" : "s"}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
