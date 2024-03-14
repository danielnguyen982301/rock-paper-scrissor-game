import React from "react";

function Player({ avatarUrl, name, wins, losses }) {
  const player = (
    <div className="user">
      <img className="avatar" src={avatarUrl} alt={name} />
      <span>{name}</span>
      <div className="score">
        WINS: <span className="winCount">{wins}</span> | LOSSES:{" "}
        <span className="lossCount">{losses}</span>
      </div>
    </div>
  );

  const npc = (
    <div className="user">
      <span>{name}</span>
      <img className="avatar" src={avatarUrl} alt={name} />
    </div>
  );

  return name === "NPC" ? npc : player;
}

export default Player;
