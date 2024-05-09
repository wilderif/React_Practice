import React, { useState } from "react";

export default function Player(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(props.name);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      props.onChangeName(props.symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  const curName = isEditing ? (
    <input type="text" required value={playerName} onChange={handleChange} />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={props.isActive ? "active" : undefined}>
      <span className="player">
        {curName}
        <span className="player-symbol">{props.symbol}</span>
      </span>

      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
