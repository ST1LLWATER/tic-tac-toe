import React from "react";

const Square = (props) => {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={`square ${props.isWinningSquare ? "winning" : ""} ${
        props.value === "X" ? "text-green" : "text-orange"
      }`}
    >
      {props.value}
    </button>
  );
};

export default Square;
