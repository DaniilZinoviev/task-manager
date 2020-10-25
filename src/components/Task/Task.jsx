import React from "react";
import PropTypes from "prop-types";
import { Draggable } from "react-beautiful-dnd";
import classnames from "classnames";
import { connect } from "react-redux";

import "./Task.scss";
import { Edit } from "../Edit";
import { deleteTask } from "../../store/actions";

const Task = ({ item, index, deleteTask }) => {
  const { id, title } = item;

  const handleEdit = () => {
    console.log(`handleEdit()`)
  }

  const handleDelete = () => {
    console.log(`handleDelete() id=[${id}]`)
    deleteTask({taskId: id})
  }

  return (
    <Draggable draggableId={id} index={index}>
      {(provided, snapshot) => (
        <div
          className={classnames("task card p-2 mb-2 ", {
            "is-dragging": snapshot.isDragging,
          })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="d-flex justify-content-between pt-1">
            <span className="mr-2">{title}</span>

            <div className="edit">
              <Edit onDelete={handleDelete} onEdit={handleEdit}/>
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

export default connect(null, { deleteTask })(Task);
