import { useRef, useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const [timeExpired, setTimeExpired] = useState(false);
  const [timeStarted, setTimeStarted] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimeStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challeng-time">{targetTime} second(s)</p>
      <p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Time is running...." : "Time is stopped"}
      </p>
    </section>
  );
}
