import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

import { ColumnsList } from "../components/ColumnsList";

const BoardPage = ({ boardId, boards }) => {
  const board = boards[boardId];

  const dragend = (res) => {
    console.log("dragend", res);
    const { destination, source, draggableId } = res;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    console.log(`@todo: reorder columns and tasks in columns.
    Move task with id ${draggableId}:
    Source: column [${source.droppableId}], index [${source.index}].
    Destination: column [${destination.droppableId}], index [${destination.index}]`);
  };

  return (
    <div className="board-page">
      <header className="z-depth-1 mb-3 pt-2 pb-1">
        <div className="container d-flex align-items-center">
          <Link to="/" className="h3 mr-4">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>Board page</h1>
        </div>
      </header>

      <div className="container mb-5">
        <h2>{board.title}</h2>
      </div>

      <main>
        <DragDropContext onDragEnd={dragend}>
          <ColumnsList board={board} />
        </DragDropContext>
      </main>
    </div>
  );
};

const mapStateToProps = ({ boards }) => {
  return {
    boards,
  };
};

export default connect(mapStateToProps)(BoardPage);
