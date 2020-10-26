import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { addBoard } from "../../store/actions";
import { EditForm } from "../EditForm";
import { useOutsideFilterRef } from "../../hooks";

const AddBoard = ({ addBoard }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleSuccess = ({ id, input }) => {
    const board = {
      id,
      title: input,
      columnIds: [],
    };
    addBoard({ board });
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
        className="btn px-3 py-2 mt-0 mx-0 align-self-start text-primary"
        onClick={() => setIsEdit(true)}
      >
        <i className="fas fa-plus"></i>
      </button>
    )
  }
  return (
    <div ref={formWrapperRef} className="card">
      <div className="card-body">
        <EditForm onSuccess={handleSuccess} onCancel={handleCancel} />
      </div>
    </div>
  );
};

AddBoard.propTypes = {
  addBoard: PropTypes.func.isRequired,
};

export default connect(null, { addBoard })(AddBoard);
