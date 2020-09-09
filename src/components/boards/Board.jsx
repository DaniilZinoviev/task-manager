import React from "react";
import { Link } from "react-router-dom";

const Board = ({ board }) => {
  return (
    <div className="board">
      <h3>{board.title}</h3>
      <p>
        <Link to={`/board/${board.id}`}>Go to board page</Link>
      </p>
    </div>
  );
};

export default Board;
