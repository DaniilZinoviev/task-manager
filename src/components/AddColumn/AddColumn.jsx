import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addColumn } from "../../store/actions";
import { EditForm } from "../EditForm";
import { useOutsideFilterRef } from "../../hooks";

const AddColumn = ({ addColumn, boardId }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSuccess = ({ id, input }) => {
    const column = {
      id,
      title: input,
      taskIds: [],
    };
    addColumn({ column, boardId });
    setIsEdit(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const [formWrapperRef] = useOutsideFilterRef(handleCancel, () => !!isEdit, [
    isEdit,
  ]);

  if (!isEdit) {
    return (
      <button
        className="btn px-3 py-2 mt-0 align-self-start text-primary"
        onClick={() => setIsEdit(true)}
      >
        <i className="fas fa-plus"></i>
      </button>
    )
  }
  return (
    <div ref={formWrapperRef} className="column card mx-3">
      <div className="card-body">
        <EditForm onSuccess={handleSuccess} onCancel={handleCancel} />
      </div>
    </div>
  );
};

AddColumn.propTypes = {
  addColumn: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
};

export default connect(null, { addColumn })(AddColumn);
