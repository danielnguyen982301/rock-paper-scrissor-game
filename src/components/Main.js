import React, { useState, useEffect, useRef } from "react";
import Display from "./Display";
import Choices from "./Choices";

import { getRandomGameItem, calculatorUserWinner } from "../utils";

const gameItems = [
  {
    url: "/images/paper.png",
    id: 0,
    winItemIds: [1],
    name: "Paper",
  },
  {
    url: "/images/rock.png",
    id: 1,
    winItemIds: [2],
    name: "Rock",
  },
  {
    url: "/images/scissor.png",
    id: 2,
    winItemIds: [0],
    name: "Scissor",
  },
];

export default function Main() {
  const [result, setResult] = useState("");
  const [userGameItem, setUserGameItem] = useState(null);
  const [computerGameItem, setComputerGameItem] = useState(null);
  const [countWin, setCountWin] = useState(0);
  const [countLoss, setCountLoss] = useState(0);
  const [round, setRound] = useState(1);
  const [enabled, setEnabled] = useState(true);
  const timerRef = useRef(null);

  const handleGameItemChange = (gameItem) => {
    if (enabled) {
      setEnabled(false);
      const newUserItem = gameItem;
      clearInterval(timerRef.current);
      setUserGameItem({ ...gameItem });
      setResult(calculatorUserWinner(newUserItem, computerGameItem));
      setTimeout(() => {
        setEnabled(true);
        setUserGameItem(null);
        setResult("");
        setRound((round) => round + 1);
      }, 5000);
    }
  };

  useEffect(() => {
    let computerNewItem;

    timerRef.current = setTimeout(() => {
      computerNewItem = getRandomGameItem(gameItems);
      setComputerGameItem({ ...computerNewItem });
    }, 50);

    return () => clearTimeout(timerRef.current);
  }, [computerGameItem, round]);

  useEffect(() => {
    if (result === "Player Won") {
      setCountWin((prevCount) => prevCount + 1);
    } else if (result === "Player Lost") {
      setCountLoss((prevCount) => prevCount + 1);
    }
  }, [result]);

  const resultColor =
    result === "Player Won"
      ? "greenyellow"
      : result === "Player Lost"
      ? "red"
      : "purple";

  return (
    <div className="container">
      <div className="main">
        <Display
          user1GameItem={userGameItem}
          user2GameItem={computerGameItem}
          result={result}
          resultColor={resultColor}
          wins={countWin}
          losses={countLoss}
        />
        <div className="game-round">
          ROUND <span>{round}</span>
        </div>
        <Choices
          gameItems={gameItems}
          handleGameItemChange={handleGameItemChange}
        />
      </div>
    </div>
  );
}
