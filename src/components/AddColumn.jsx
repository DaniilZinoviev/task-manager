import React, { useState } from "react";
import PropTypes from "prop-types";

function AddColumn({ addColumn }) {
  const [label, setLabel] = useState("");
  const [view, setView] = useState("minimal"); // minimal || full

  function onSubmit(e) {
    e.preventDefault();
    if (label.trim) {
      addColumn(label);
      setLabel("");
      setView("minimal");
    }
  }
  return (
    <React.Fragment>
      {view === "full" ? (
        <div className="column">
          <h3>Add column</h3>
          <div className="mb-20">
            <form onSubmit={(e) => onSubmit(e)}>
              <input
                type="text"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                placeholder="Column name"
                autoFocus={true}
              />
              <button type="submit" className="btn">
                Add a new column
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div>
          <button className="btn mr-1" onClick={(e) => setView("full")}>
            Add a column
          </button>
        </div>
      )}
    </React.Fragment>
  );
}

AddColumn.propTypes = {
  addColumn: PropTypes.func.isRequired,
};

export default AddColumn;
