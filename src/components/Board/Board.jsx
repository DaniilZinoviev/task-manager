import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { useOutsideFilterRef } from "../../hooks";
import { updateBoard, deleteBoard } from "../../store/actions";
import { EditForm } from "../EditForm";
import { Actions } from "../Actions";

const Board = ({ board, updateBoard, deleteBoard }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEditSuccess = ({ input }) => {
    const newBoard = { ...board, title: input };
    updateBoard({ board: newBoard });
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
      <div ref={formWrapperRef} className="card">
        <div className="card-body">
          <div className="mb-3">
            <EditForm
              onSuccess={handleEditSuccess}
              onCancel={handleEditCancel}
            />
          </div>
          <p className="card-text">
            <Link
              to={`/board/${board.id}`}
              className="m-0 btn btn-primary btn-sm"
            >
              View
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4 className="card-title mb-3">{board.title}</h4>

          <div className="edit">
            <Actions
              onEdit={() => setIsEdit(true)}
              onDelete={() => deleteBoard({ boardId: board.id })}
            />
          </div>
        </div>
        <p className="card-text">
          <Link
            to={`/board/${board.id}`}
            className="m-0 btn btn-primary btn-sm"
          >
            View
          </Link>
        </p>
      </div>
    </div>
  );
};

export default connect(null, { deleteBoard, updateBoard })(Board);
// export default Board;
