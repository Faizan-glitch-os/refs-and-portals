import { forwardRef, useImperativeHandle, useRef } from "react";

import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { remainingTime, targetTime, onReset },
  ref
) {
  const dialog = useRef();

  const result = remainingTime <= 0;

  const timeRemaining = (remainingTime / 1000).toFixed(2);

  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {result && <h2>You Lost</h2>}
      {!result && <h2>Your Score {score}</h2>}
      <p>
        The target time was <strong>{targetTime} second(s)</strong>
      </p>
      <p>
        You stopped the timer with{" "}
        <strong>{timeRemaining} second(s) left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
