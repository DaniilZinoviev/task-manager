import React from "react";
import { connect } from "react-redux";

import "./BoardsList.scss";
import { Board } from "../Board";
import { AddBoard } from "../AddBoard";

const BoardsList = ({ boardsOrder, boards }) => {
  return (
    <div className="d-flex flex-wrap">
      {boardsOrder.map((boardId) => {
        const board = boards[boardId];
        return (
          <div className="mx-2 mb-2 boardWrap" key={board.id}>
            <Board board={board} />
          </div>
        );
      })}

      <div className="mx-2 mb-2 boardWrap">
        <AddBoard />
      </div>
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
