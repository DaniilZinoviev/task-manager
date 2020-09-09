import React from "react";

import "./BoardsList.scss";
import { Board } from "../Board";

const BoardsList = ({ boardsOrder, boards }) => {
  return (
    <div className="boards-list">
      {boardsOrder.map((boardId, index) => {
        const board = boards[boardId];
        return <Board board={board} key={board.id} />;
      })}
    </div>
  );
};

export default BoardsList;
