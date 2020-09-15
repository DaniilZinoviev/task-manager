import React from "react";

import "./ColumnsList.scss";
import { Column } from "../Column";

const ColumnsList = ({ board }) => {
  return (
    <div className="columns-list d-flex">
      {board.columnIds.map((columnId, index) => (
        <Column key={columnId} columnId={columnId} index={index} />
      ))}
    </div>
  );
};

export default ColumnsList;
