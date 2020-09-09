import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ColumnsContainer from "./components/ColumnsContainer";
import { appData } from "./sample-data";
import MainPage from "./pages/MainPage";
import BoardPage from "./pages/BoardPage";

class App extends React.Component {
  // const addColumn = (label) => {
  //   setColumns(
  //     columns.concat([
  //       {
  //         id: Math.floor(Math.random() * 300),
  //         label: label,
  //         cards: [],
  //       },
  //     ])
  //   );
  // };

  state = appData;

  render() {
    const { boards, boardsOrder, columns, tasks } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <MainPage boards={boards} boardsOrder={boardsOrder} />
            )}
          />
          <Route
            path="/board/:boardId"
            render={({ match }) => {
              const boardId = match.params.boardId;
              const board = boards[boardId];
              return (
                <BoardPage board={board} columns={columns} tasks={tasks} />
              );
            }}
          />
          <Route render={() => <h2>404 error: Page not found.</h2>} />
        </Switch>
      </Router>
    );
  }
}

export default App;
