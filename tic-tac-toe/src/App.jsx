import React, { useState } from "react";

import Player from "./components/Player/Player.jsx";
import GameBoard from "./components/GameBoard/GameBoard.jsx";
import Log from "./components/Log/Log.jsx";
import GameOver from "./components/GameOver/GameOver.jsx";
import { WINNING_COMBINATIONS } from "./winning-combinations.js";

const deriveActivePlayer = (gameTurns) => {
  return gameTurns.length > 0 && gameTurns[gameTurns.length - 1].player === "X"
    ? "O"
    : "X";
};

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [players, setPlayers] = useState({ X: "Player 1", O: "Player 2" });
  const [gameTurns, setGameTurns] = useState([]);

  const curPlayer = deriveActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard.map((row) => [...row])];

  for (const turn of gameTurns) {
    gameBoard[turn.square.row - 1][turn.square.col - 1] = turn.player;
  }

  let winner = null;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstWinnigSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondWinnigSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdWinnigSymbol =
      gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstWinnigSymbol &&
      firstWinnigSymbol === secondWinnigSymbol &&
      secondWinnigSymbol === thirdWinnigSymbol
    ) {
      winner = firstWinnigSymbol;
      break;
    }
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handlePlayerChange(row, col) {
    setGameTurns((prevTurns) => {
      let curPlayer = deriveActivePlayer(prevTurns);

      const newTurns = [
        ...prevTurns,
        { square: { row: row + 1, col: col + 1 }, player: curPlayer },
      ];

      return newTurns;
    });
  }

  function handleRestart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers((prevPlayers) => {
      return { ...prevPlayers, [symbol]: newName };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="player 1"
            symbol="X"
            isActive={curPlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={curPlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        <GameBoard onSelectSquare={handlePlayerChange} board={gameBoard} />
        {(winner || hasDraw) && (
          <GameOver winner={players[winner]} restart={handleRestart} />
        )}
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
