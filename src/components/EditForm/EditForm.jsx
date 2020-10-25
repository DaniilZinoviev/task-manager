import React, { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";

const EditForm = ({ onSuccess, onCancel, placeholder = "label" }) => {
  const [input, setLabel] = useState("");
  const defaultBtnClass = "btn btn-add px-3 py-2 mt-0 align-self-start";

  const onSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSuccess({
        id: uuidv4(),
        input,
      });
      setLabel("");
    }
  };

  const clear = () => {
    setLabel("");
    onCancel();
  };

  return (
    <form className="d-block" onSubmit={onSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setLabel(e.target.value)}
        placeholder={placeholder}
        autoFocus={true}
        required={true}
        className="form-control text-dark d-block mb-3"
      />
      <button
        className={classNames(defaultBtnClass, "text-success")}
        onClick={onSubmit}
      >
        <i className="fas fa-check"></i>
      </button>
      <button
        className={classNames(defaultBtnClass, "text-danger")}
        onClick={clear}
      >
        <i className="fas fa-times"></i>
      </button>
    </form>
  );
};

EditForm.defaultProps = {
  placeholder: "Label",
};

EditForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default EditForm;
