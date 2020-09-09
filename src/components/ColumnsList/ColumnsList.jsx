import React from "react";

import "./ColumnsList.scss";
import { Column } from "../Column";

const ColumnsList = ({ board, columns, tasks }) => {
  return (
    <div className="columns-list d-flex">
      {board.columnIds.map((columnId, index) => {
        const column = columns[columnId];
        return (
          <Column key={column.id} column={column} tasks={tasks} index={index} />
        );
      })}
    </div>
  );
};

export default ColumnsList;
