import React from "react";
import Player from "./Player";
import Result from "./Result";

function Display({
  user1GameItem,
  user2GameItem,
  result,
  resultColor,
  wins,
  losses,
}) {
  return (
    <div className="display">
      <Player avatarUrl="/avatar/computer.png" name="NPC" />
      <Result
        user1GameItem={user1GameItem}
        user2GameItem={user2GameItem}
        result={result}
        resultColor={resultColor}
      />
      <Player
        avatarUrl="/avatar/user.jpeg"
        name="Player"
        wins={wins}
        losses={losses}
      />
    </div>
  );
}

export default Display;
