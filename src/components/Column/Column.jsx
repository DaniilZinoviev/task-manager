import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import "./Column.scss";
import { Task } from "../Task";

const Column = ({ columnId, tasks, columns }) => {
  const column = columns[columnId];
  const { id, title, taskIds } = column;

  return (
    <div className="column card mx-3">
      <div className="card-body">
        <h4 className="card-title mb-4">{title}</h4>

        <Droppable droppableId={id}>
          {(provided) => (
            <div
              className="columns card-text"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {taskIds.map((taskId, index) => {
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
  columnId: PropTypes.string.isRequired,
};

const mapStateToProps = ({ tasks, columns }) => {
  return {
    tasks,
    columns,
  };
};

export default connect(mapStateToProps)(Column);
