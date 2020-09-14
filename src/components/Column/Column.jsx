import React from "react";
import PropTypes from "prop-types";
import { Task } from "../Task";
import { Droppable } from "react-beautiful-dnd";

import "./Column.scss";

const Column = ({ column, tasks }) => {
  return (
    <div className="column card mx-3">
      <div className="card-body">
        <h4 className="card-title mb-4">{column.title}</h4>

        <Droppable droppableId={column.id}>
          {(provided) => (
            <div
              className="columns card-text"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {column.taskIds.map((taskId, index) => {
                const task = tasks[taskId];
                return <Task key={taskId} item={task} index={index} />;
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

Column.propTypes = {
  index: PropTypes.number,
  column: PropTypes.object.isRequired,
};

export default Column;
