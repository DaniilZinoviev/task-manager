import React from "react";
import { connect } from "react-redux";

import "./BoardsList.scss";
import { Board } from "../Board";

const BoardsList = ({ boardsOrder, boards }) => {
  return (
    <div className="boards-list d-flex flex-wrap">
      {boardsOrder.map((boardId) => {
        const board = boards[boardId];
        return (
          <div className="mx-2 mb-2" key={board.id}>
            <Board board={board} />
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = ({ boardsOrder, boards }) => {
  return {
    boardsOrder,
    boards,
  };
};

export default connect(mapStateToProps)(BoardsList);
