import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { addTask } from "../../store/actions";

const AddTask = ({ addTask, columnId }) => {
  const [label, setLabel] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  /**
   * Handle click outside of the form
   */
  const formRef = useRef(null);
  useEffect(() => {
    if (isEdit) {
      const handleClick = (e) => {
        if (formRef.current && !formRef.current.contains(e.target)) {
          clear();
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
    }
  }, [isEdit, formRef]);

  const onSubmit = (e) => {
    e.preventDefault();
    success();
  };

  const success = () => {
    if (label.trim()) {
      const task = {
        id: uuidv4(),
        title: label,
      };
      addTask({ task, columnId });
      clear();
    }
  };

  const clear = () => {
    setLabel("");
    setIsEdit(false);
  };

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
    <form
      ref={formRef}
      className="task card p-2 d-block"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
        placeholder="Label"
        autoFocus={true}
        required={true}
        className="form-control text-dark d-block mb-3"
      />
      <button
        className="btn btn-add px-3 py-2 mt-0 align-self-start text-success"
        onClick={success}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        className="btn btn-add px-3 py-2 mt-0 align-self-start text-danger"
        onClick={clear}
      >
        <i className="fas fa-times"></i>
      </button>
    </form>
  );
};

AddTask.propTypes = {
  addTask: PropTypes.func.isRequired,
  columnId: PropTypes.string.isRequired,
};

export default connect(null, { addTask })(AddTask);
