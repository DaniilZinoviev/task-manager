import React from "react";
import { Link } from "react-router-dom";
import { ColumnsList } from "../components/ColumnsList";

const BoardPage = ({ board, columns, tasks }) => {
  // @todo: get board from router
  return (
    <div className="board-page">
      <header className="container">
        <h1 className="text-center">Board page</h1>
        <h3>
          Board: <i>{board.title}</i>
        </h3>
        <p>
          <Link to="/">Back</Link>
        </p>
      </header>

      <main>
        <ColumnsList board={board} columns={columns} tasks={tasks} />
      </main>
    </div>
  );
};

export default BoardPage;
