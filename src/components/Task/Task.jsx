import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import "./Task.scss";

const Task = ({ item, index }) => {
  return (
    <Draggable draggableId={item.id} index={index}>
      {(provided) => (
        <div
          className="task card px-2 py-1 mb-2"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {item.title}
        </div>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Task;
