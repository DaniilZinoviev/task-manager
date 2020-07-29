import React from "react";
import PropTypes from "prop-types";

function Card({ card, index }) {
  return (
    <div className="card" draggable="true">
      {card.label}
    </div>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Card;
