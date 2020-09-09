import React from "react";
import PropTypes from "prop-types";

const Card = ({ card, index, setHovered, hovered, columnRef }) => {
  const onDragStart = (e) => {
    setHovered(columnRef.current);
    console.log("Card: setHovered");
  };

  return (
    <div className="card" draggable="true" onDragStart={(e) => onDragStart(e)}>
      {card.label}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Card;
