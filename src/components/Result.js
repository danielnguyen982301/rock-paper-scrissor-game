import React from "react";

function Result({ user1GameItem, user2GameItem, result, resultColor }) {
  return (
    <div>
      <div className="result-wrapper">
        {user1GameItem && (
          <img
            className="player-result-img"
            src={user1GameItem.url}
            alt={user1GameItem.name}
          />
        )}
        <span className="result" style={{ color: resultColor }}>
          {result}
        </span>
        {user2GameItem && (
          <img
            className="npc-result-img"
            src={user2GameItem.url}
            alt={user2GameItem.name}
          />
        )}
      </div>
    </div>
  );
}

export default Result;
