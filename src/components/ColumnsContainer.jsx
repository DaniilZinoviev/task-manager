import React, { useState } from "react";
import Column from "./Column";
import AddColumn from "./AddColumn";

const ColumnsContainer = ({ columns, addColumn }) => {
  // const [isDragged, setIsDragged] = useState(false);

  const [hovered, setHovered] = useState(null);

  return (
    <div className="columns-container">
      {columns.map((column, index) => (
        <Column
          column={column}
          index={index}
          key={column.id}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}

      <AddColumn addColumn={addColumn} />
    </div>
  );
};

export default ColumnsContainer;
