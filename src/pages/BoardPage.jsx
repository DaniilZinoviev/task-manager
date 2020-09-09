import React from "react";
import { Link } from "react-router-dom";
import { ColumnsList } from "../components/ColumnsList";

const BoardPage = ({ board, columns, tasks }) => {
  // @todo: get board from router
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
        <ColumnsList board={board} columns={columns} tasks={tasks} />
      </main>
    </div>
  );
};

export default BoardPage;
