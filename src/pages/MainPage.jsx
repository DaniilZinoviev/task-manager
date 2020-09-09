import React from "react";

import { BoardsList } from "../components/BoardsList";

const MainPage = ({ boards, boardsOrder }) => {
  return (
    <div className="main-page">
      <header className="z-depth-1 mb-3 pt-2 pb-1">
        <div className="container d-flex align-items-center">
          <h1>Main page</h1>
        </div>
      </header>

      <main className="container">
        <BoardsList boardsOrder={boardsOrder} boards={boards} />
      </main>
    </div>
  );
};

export default MainPage;
