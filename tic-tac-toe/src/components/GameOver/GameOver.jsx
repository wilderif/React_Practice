export default function GameOver(props) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {props.winner ? <p>Winner: {props.winner}</p> : <p>Draw</p>}
      <p>
        <button onClick={props.restart}>Restart</button>
      </p>
    </div>
  );
}
