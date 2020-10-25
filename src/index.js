import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { App } from "./components/App";
import { reducer } from "./store/reducers";
import { LocalStorage } from './services'

const storage = new LocalStorage();

const store = createStore(reducer, storage.getData());
store.subscribe(() => {
  const newState = store.getState();
  storage.saveData(newState);
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
