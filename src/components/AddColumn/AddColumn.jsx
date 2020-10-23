import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addColumn } from "../../store/actions";

const AddColumn = ({ addColumn, boardId }) => {
  const [label, setLabel] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  /**
   * Handle click outside of the form
   */
  const formRef = useRef(null)
  useEffect(() => {
    if (isEdit) {
      const handleClick = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
          clear();
        }
      }
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }
  }, [isEdit, formRef])
  
  const onSubmit = (e) => {
    e.preventDefault();
    success();
  };

  const success = () => {
    if (label.trim()) {
      const column = {
        id: uuidv4(),
        title: label,
        taskIds: [],
      };
      addColumn({ column, boardId });
      clear();
    }
  }

  const clear = () => {
    setLabel("");
    setIsEdit(false);
  }

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
    <form ref={formRef} className="column card mx-3 d-block" onSubmit={onSubmit}>
      <div className="card-body">
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Label"
          autoFocus={true}
          required={true}
          className="form-control text-dark mb-3"
        />
        <button
          className="btn px-3 py-2 mt-0 text-success"
          onClick={success}
        >
          <i className="fas fa-check"></i>
        </button>
        <button
          className="btn px-3 py-2 mt-0 text-danger"
          onClick={clear}
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </form>
  );
};

AddColumn.propTypes = {
  addColumn: PropTypes.func.isRequired,
  boardId: PropTypes.string.isRequired,
};

export default connect(null, { addColumn })(AddColumn);
