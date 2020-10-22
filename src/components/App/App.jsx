import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.scss";
import MainPage from "../../pages/MainPage";
import BoardPage from "../../pages/BoardPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route
          path="/board/:boardId"
          render={({ match }) => {
            const boardId = match.params.boardId;
            return <BoardPage boardId={boardId} />;
          }}
        />
        <Route render={() => <h2>404 error: Page not found.</h2>} />
      </Switch>
    </Router>
  );
};

export default App;
