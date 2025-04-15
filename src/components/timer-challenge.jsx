import { useRef, useState } from "react";
import ResultModal from "./result-modal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const modal = useRef();

  const [remainingTime, setRemainingTime] = useState(targetTime * 1000);

  const isTimeActive = remainingTime >= 0 && remainingTime < targetTime * 1000;

  if (remainingTime <= 0) {
    clearInterval(timer.current);
    setRemainingTime(targetTime * 1000);
    modal.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setRemainingTime((previousTime) => previousTime - 10);
    }, 10);
  }

  function handleStop() {
    modal.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      <ResultModal result="lost" targetTime={targetTime} ref={modal} />

      <section className="challenge">
        <h2>{title}</h2>
        <p className="challeng-time">{targetTime} second(s)</p>
        <p>
          <button onClick={isTimeActive ? handleStop : handleStart}>
            {timeStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={isTimeActive ? "active" : undefined}>
          {isTimeActive ? "Time is running...." : "Time is stopped"}
        </p>
      </section>
    </>
  );
}
