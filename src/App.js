import React, { useCallback, useState } from "react";
import Board from "./Components/Board";
import calculateWinner from "./helper";

import "./Styles/root.scss";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner
    ? `Winner Is  ${winner}`
    : `Next Player To Mark: ${isXNext ? "X" : "O"}`;

  const handleSquareClick = (position) => {
    if (board[position] || winner) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? "X" : "O";
        } else {
          return square;
        }
      });
    });
    setIsXNext(!isXNext);
  };

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h1>{message}</h1>
      <Board board={board} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
