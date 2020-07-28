import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Column({ column, index }) {
  const columnRef = React.createRef();

  function onDrop(e) {
    console.log("onDrop", e);
  }
  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragEnter(e) {
    // e.preventDefault();
    if (e.target === columnRef.current) {
      console.log("onDragEnter", columnRef.current === e.target, e.target);
    }
  }


  function onDragLeave(e) {
    // e.preventDefault();
    if (e.target === columnRef.current) {
      console.log("onDragLeave", columnRef.current === e.target, e.target);
    }
  }
  return (
    <div
      className="column column-default"
      ref={columnRef}
      onDrop={(e) => onDrop(e)}
      onDragOver={(e) => onDragOver(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragLeave={(e) => onDragLeave(e)}
    >
      <h3>{column.label}</h3>
      <div className="columns">
        {column.cards.map((card) => (
          <Card card={card} key={card.id} />
        ))}

      </div>
    </div>
  );
}

Column.propTypes = {
  index: PropTypes.number,
  column: PropTypes.object.isRequired,
};

export default Column;
