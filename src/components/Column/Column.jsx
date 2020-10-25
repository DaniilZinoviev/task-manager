import React, { useState } from "react";
import PropTypes from "prop-types";
import { Droppable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import "./Column.scss";
import { deleteColumn, updateColumn } from "../../store/actions";
import { useOutsideFilterRef } from "../../hooks";
import { Task } from "../Task";
import { AddTask } from "../AddTask";
import { Actions } from "../Actions";
import { EditForm } from "../EditForm";

const Column = ({ columnId, tasks, columns, deleteColumn, updateColumn }) => {
  const column = columns[columnId];
  const { id, title, taskIds } = column;
  const [isEdit, setIsEdit] = useState(false);

  const handleEditSuccess = ({ input }) => {
    const newColumn = { ...column, title: input };
    updateColumn({ column: newColumn });
    setIsEdit(false);
  };

  const handleEditCancel = () => {
    setIsEdit(false);
  };

  const [formWrapperRef] = useOutsideFilterRef(
    handleEditCancel,
    () => !!isEdit,
    [isEdit]
  );

  if (isEdit) {
    return (
      <div ref={formWrapperRef} className="column card mx-3">
        <div className="card-body">
          <div className="mb-4">
            <EditForm onSuccess={handleEditSuccess} onCancel={handleEditCancel} />
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
  }

  return (
    <div className="column card mx-3">
      <div className="card-body">
        <div className="mb-4 d-flex justify-content-between">
          <h4 className="card-title mb-0 mr-2">{title}</h4>

          <div className="edit">
            <Actions
              onEdit={() => setIsEdit(true)}
              onDelete={() => deleteColumn({ columnId })}
            />
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

export default connect(mapStateToProps, { deleteColumn, updateColumn })(Column);
