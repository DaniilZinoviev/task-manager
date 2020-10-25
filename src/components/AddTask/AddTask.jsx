// @ts-check
import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addTask } from "../../store/actions";
import { EditForm } from "../EditForm";
import { useOutsideFilterRef } from "../../hooks";

const AddTask = ({ addTask, columnId }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSuccess = ({ id, input }) => {
    const task = { id, title: input };
    addTask({ task, columnId });
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
        className="btn text-primary px-3 py-2 ml-0 mt-0"
        onClick={() => setIsEdit(true)}
      >
        <i className="fas fa-plus"></i>
      </button>
    );
  }
  return (
    <div ref={formWrapperRef} className="task card p-2">
      <EditForm onSuccess={handleSuccess} onCancel={handleCancel} />
    </div>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default connect(null, { addTask })(AddTask);
