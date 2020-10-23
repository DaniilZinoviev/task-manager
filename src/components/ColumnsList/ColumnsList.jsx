import React from "react";

import "./ColumnsList.scss";
import { Column } from "../Column";
import AddColumn from "../AddColumn/AddColumn";

const ColumnsList = ({ board }) => {
  return (
    <div className="columns-list d-flex">
      {board.columnIds.map((columnId, index) => (
        <Column key={columnId} columnId={columnId} index={index} />
      ))}

      {/* <button className="btn btn-add px-3 py-2 mt-0 align-self-start text-primary">
        <i className="fas fa-plus"></i>
      </button> */}
      <AddColumn boardId={board.id}/>
    </div>
  );
};

export default ColumnsList;
