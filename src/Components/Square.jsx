import React from "react";

const Square = (props) => {
  return (
    <button
      type="button"
      className="square"
      onClick={props.onClick}
      style={{ fontWeight: props.isWinningSquare ? "bold" : "normal" }}
    >
      {props.value}
    </button>
  );
};

export default Square;
