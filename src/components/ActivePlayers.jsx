import React, { useState, useEffect } from "react";

function PlayerList() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch('/data/players.json')
        .then(response => response.json())
        .then(data => setPlayers(data));
  }, [players]);

  return (
    <div>
      <h2>Player List</h2>
      <ul className="player-grid">
        {players.map((player) => (
          <li id={player.id} key={player.id}>
            <img src="https://via.placeholder.com/120x120" alt={player.name} />
            <h3>
              {player.name}, <em>{player.position}</em>
            </h3>
            <p>{player.team}</p>
            {/*<p>Jersey Number: {player.jerseyNumber}</p>*/}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlayerList;
