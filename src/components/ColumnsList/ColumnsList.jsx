import React, {useEffect, useRef, useState} from "react";

import "./ColumnsList.scss";
import { Column } from "../Column";
import AddColumn from "../AddColumn/AddColumn";
import classNames from "classnames";

const ColumnsList = ({ board }) => {
  const containerRef = useRef(null)
  const [scrolled, setScrolled] = useState(null)

  useEffect(() => {
    document.addEventListener('mouseup', onMouseUp)
    return () => document.removeEventListener('mouseup', onMouseUp)
  }, [])

  const onMouseDown = (e) => {
    if (
      e.target === containerRef.current ||
      e.target.parentElement === containerRef.current
    ) {
      setScrolled(e.clientX)
    }
  }
  const onMouseUp = (e) => {
    setScrolled(null)
  }
  const onMouseMove = (e) => {
    if (scrolled !== null) {
      if (containerRef && containerRef.current) {
        const currentScroll = containerRef.current.scrollLeft
        const scroll = currentScroll - (e.clientX - scrolled)
        containerRef.current.scrollLeft = scroll
        setScrolled(e.clientX)
      }
    }
  }

  return (
    <div
    ref={containerRef}
    className={classNames({'scrolling': scrolled}, 'columns-list py-2 d-flex')}
    onMouseMove={onMouseMove}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    >
      {board.columnIds.map((columnId, index) => (
        <div className="mx-sm-2 mb-2 column-wrap" key={columnId}>
          <Column columnId={columnId} index={index} />
        </div>
      ))}

      <div className="mx-sm-2 mb-2 column-wrap">
        <AddColumn boardId={board.id} />
      </div>
    </div>
  );
};

export default ColumnsList;
