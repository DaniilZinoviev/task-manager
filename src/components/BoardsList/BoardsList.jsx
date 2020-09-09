import React from "react";

import "./BoardsList.scss";
import { Board } from "../Board";

const BoardsList = ({ boardsOrder, boards }) => {
  return (
    <div className="boards-list d-flex flex-wrap">
      {boardsOrder.map((boardId, index) => {
        const board = boards[boardId];
        return (
          <div className="mx-2 mb-2">
            <Board board={board} key={board.id} />
          </div>
        );
      })}
    </div>
  );
};

export default BoardsList;
