import React from "react";
import Column from "./Column";
import AddColumn from "./AddColumn";

function ColumnsContainer({ columns, addColumn }) {
  
  return (
    <div className="columns-container">
      {columns.map((column, index) => (
        <Column column={column} index={index} key={column.id} />
      ))}

      <AddColumn addColumn={addColumn} />
    </div>
  );
}

export default ColumnsContainer;
