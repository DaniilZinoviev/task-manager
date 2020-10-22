import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import classnames from "classnames";

import "./Task.scss";

const Task = ({ item, index }) => {
  const { id, title } = item;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={classnames("task card p-2 mb-2", {
            "is-dragging": snapshot.isDragging,
          })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {title}
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
