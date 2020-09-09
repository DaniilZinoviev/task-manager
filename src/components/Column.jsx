import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const classes = {
  container: "column column-default",
  containerHover: "column column-default drag-hovered",
};

const Column = ({ column, index, setHovered, hovered }) => {
  const columnRef = React.createRef();
  const [hover, setHover] = useState(false);
  // if (hovered !== null && hovered === columnRef.current) {
  //   hover = true;
  // }
  console.log(1);

  useEffect(() => {
    console.log("useEffect", columnRef.current, hovered);
    if (hovered !== null && hovered === columnRef.current) {
      setHover(true);
    }
  }, []);

  function onDrop(e) {
    console.log("onDrop", e);
  }
  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragEnter(e) {
    // e.preventDefault();
    // if (e.target === columnRef.current) {
    console.log("onDragEnter", columnRef.current);
    setHovered(columnRef.current);
    // }
  }

  function onDragLeave(e) {
    // e.preventDefault();
    // if (e.target === columnRef.current) {
    console.log("onDragLeave", columnRef.current);
    // setHover(false);
    // }
  }

  return (
    <div
      className={hover ? classes.containerHover : classes.container}
      ref={columnRef}
      onDrop={(e) => onDrop(e)}
      onDragOver={(e) => onDragOver(e)}
      onDragEnter={(e) => onDragEnter(e)}
      onDragLeave={(e) => onDragLeave(e)}
    >
      <h3>{column.label}</h3>
      <div className="columns">
        {column.cards.map((card) => (
          <Card
            card={card}
            key={card.id}
            setHovered={setHovered}
            hovered={hovered}
            columnRef={columnRef}
          />
        ))}

        {hover ? <div className="card">test</div> : null}
      </div>
    </div>
  );
};

Column.propTypes = {
  index: PropTypes.number,
  column: PropTypes.object.isRequired,
};

export default Column;
