import React from "react";

const StatusMessage = ({ winner, current }) => {
  //   const message = winner
  //     ? `Winner Is  ${winner}`
  //     : `Next Player To Mark: ${current.isXNext ? "X" : "O"}`;
  const noMovesLeft = current.board.every((el) => el !== null);
  return (
    <div className="status-message">
      {winner && (
        <>
          Winner Is{" "}
          <span className={winner === "X" ? "text-green" : "text-orange"}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next Player Is:{" "}
          <span className={current.isXNext ? "text-green" : "text-orange"}>
            {current.isXNext ? "X" : "O"}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          "<span className="text-green">X</span> And{" "}
          <span className="text-orange">O</span> Tied Bruh"
        </>
      )}
    </div>
  );
};

export default StatusMessage;
