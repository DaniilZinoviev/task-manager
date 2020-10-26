import React from "react";

import "./ColumnsList.scss";
import { Column } from "../Column";
import AddColumn from "../AddColumn/AddColumn";

const ColumnsList = ({ board }) => {
  return (
    <div className="columns-list d-flex flex-wrap">
      {board.columnIds.map((columnId, index) => (
        <div className="mx-sm-2 mb-2 column-wrap" key={columnId}>
          <Column columnId={columnId} index={index} />
        </div>
      ))}

      <div className="mx-sm-2 mb-2 column-wrap">
        <AddColumn boardId={board.id} />
      </div>
    </div>
  );
};

export default ColumnsList;
