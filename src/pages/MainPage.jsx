import React from "react";
import BoardsList from "../components/boards/BoardsList";

const MainPage = ({ boards, boardsOrder }) => {
  return (
    <div className="main-page">
      <header className="container text-center ">
        <h1>Main page</h1>
      </header>

      <main className="container">
        <BoardsList boards={boards} boardsOrder={boardsOrder} />
      </main>
    </div>
  );
};

export default MainPage;
