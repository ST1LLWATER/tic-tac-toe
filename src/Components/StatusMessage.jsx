import React from "react";

const StatusMessage = ({ winner, current }) => {
  //   const message = winner
  //     ? `Winner Is  ${winner}`
  //     : `Next Player To Mark: ${current.isXNext ? "X" : "O"}`;
  const noMovesLeft = current.board.every((el) => el !== null);
  return (
    <div>
      <h2>
        {winner && `Winner Is  ${winner}`}
        {!winner &&
          !noMovesLeft &&
          `Next Player To Mark: ${current.isXNext ? "X" : "O"}`}
        {!winner && noMovesLeft && "X And O Tied Bruh"}
      </h2>
    </div>
  );
};

export default StatusMessage;
