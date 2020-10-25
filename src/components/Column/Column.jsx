import React from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { Task } from "../Task";
import { AddTask } from "../AddTask";
import { Edit } from '../Edit'
import { deleteColumn } from "../../store/actions";
import "./Column.scss";

const Column = ({ columnId, tasks, columns, deleteColumn }) => {
  const column = columns[columnId];
  const { id, title, taskIds } = column;

  const handleDelete = () => {
    console.log(`[${Column.name}] handleDelete() (columnId=[${columnId}])`)
    deleteColumn({columnId})
  }

  const handleEdit = () => {
    console.log(`[${Column.name}] handleEdit()`)
  }

  return (
    <div className="column card mx-3">
      <div className="card-body">
        <div className="mb-4 d-flex justify-content-between">
          <h4 className="card-title mb-0 mr-2">
            {title}
          </h4>

          <div className="edit">
            <Edit onDelete={handleDelete} onEdit={handleEdit} />
          </div>
        </div>

        <Droppable droppableId={id}>
          {(provided) => (
            <div
              className="columns card-text"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div className="mb-3">
                {taskIds.map((taskId, index) => {
                  const task = tasks[taskId];
                  return <Task key={taskId} item={task} index={index} />;
                })}
                {provided.placeholder}
              </div>

              <AddTask columnId={columnId} />
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

export default connect(mapStateToProps, { deleteColumn })(Column);
