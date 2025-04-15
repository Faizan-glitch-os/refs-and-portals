import Player from "./components/Player.jsx";
import TimerChallenge from "./components/timer-challenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={10} />
        <TimerChallenge title="Give me Blood" targetTime={15} />
      </div>
    </>
  );
}

export default App;
