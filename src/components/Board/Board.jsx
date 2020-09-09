import React from "react";
import { Link } from "react-router-dom";

import "./Board.scss";

const Board = ({ board }) => {
  return (
    <div className="board card">
      <div className="card-body">
        <h4 className="card-title text-center mb-3">{board.title}</h4>
        <p className="card-text">
          <Link
            to={`/board/${board.id}`}
            className="m-0 btn btn-primary btn-sm"
          >
            View
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Board;
