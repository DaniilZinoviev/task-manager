import React from "react";
import PropTypes from "prop-types";
import Card from "./Card";

function Column({ column, index }) {
  function onDrop(e) {
    console.log("onDrop", e);
  }
  function onDragOver(e) {
    e.preventDefault();
  }
  return (
    <div className="column column-default" onDrop={e => onDrop(e)} onDragOver={e => onDragOver(e)}>
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
