import React, { useState } from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import classnames from "classnames";
import { connect } from "react-redux";

import "./Task.scss";
import { Actions } from "../Actions";
import { deleteTask, updateTask } from "../../store/actions";
import { EditForm } from "../EditForm";
import { useOutsideFilterRef } from "../../hooks";

const Task = ({ item, index, deleteTask, updateTask }) => {
  const { id, title } = item;
  const [isEdit, setIsEdit] = useState(false);

  const handleEditSuccess = ({ input }) => {
    const newTask = { ...item, title: input };
    updateTask({ task: newTask });
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

  const handleDelete = () => {
    deleteTask({ taskId: id });
  };

  if (isEdit) {
    return (
      <div ref={formWrapperRef} className="task card p-2 mb-2">
        <EditForm onSuccess={handleEditSuccess} onCancel={handleEditCancel} />
      </div>
    );
  }

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
          <div className="d-flex justify-content-between pt-1">
            <span className="mr-2">{title}</span>

            <div className="edit">
              <Actions onDelete={handleDelete} onEdit={() => setIsEdit(true)} />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default connect(null, { deleteTask, updateTask })(Task);
