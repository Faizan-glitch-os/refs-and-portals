import { useState, useRef } from "react";

export default function Player() {
  const [player, setPlayer] = useState("");
  const playerName = useRef();

  function handleOnClick() {
    setPlayer(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {player}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
