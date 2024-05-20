import React, { useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = React.forwardRef(function ResultModal(props, ref) {
  React.useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
        // dialog.current.show();
      },
    };
  });

  const dialog = React.useRef();
  const userWin = props.remainingTime > 0;
  const formattedRemainingTime = (props.remainingTime / 1000).toFixed(2);
  const score = Math.round(
    (1 - props.remainingTime / (props.targetTime * 1000)) * 100
  );

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={props.onReset}>
      <h2>
        You <strong>{userWin ? "won" : "lost"}</strong>
      </h2>
      <h3>{userWin ? `Your score is ${score}` : "Better luck next time"}</h3>
      <p>
        The target time was <strong>{props.targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the timer with <strong>{formattedRemainingTime}</strong>{" "}
        seconds left.
      </p>
      <form method="dialog" onSubmit={props.onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
