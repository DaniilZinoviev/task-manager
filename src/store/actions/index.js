const moveTask = (payload) => {
  return {
    type: "MOVE_TASK",
    payload,
  };
};

const addTask = (payload) => {
  return {
    type: "ADD_TASK",
    payload,
  };
};

const addColumn = (payload) => {
  return {
    type: "ADD_COLUMN",
    payload,
  };
};

const addBoard = (payload) => {
  return {
    type: "ADD_BOARD",
    payload,
  };
};

const deleteTask = (payload) => {
  return {
    type: "DELETE_TASK",
    payload,
  };
};

const deleteColumn = (payload) => {
  return {
    type: "DELETE_COLUMN",
    payload,
  };
};

const deleteBoard = (payload) => {
  return {
    type: "DELETE_BOARD",
    payload,
  };
};

const updateTask = (payload) => {
  return {
    type: "UPDATE_TASK",
    payload,
  };
};

const updateColumn = (payload) => {
  return {
    type: "UPDATE_COLUMN",
    payload,
  };
};

const updateBoard = (payload) => {
  return {
    type: "UPDATE_BOARD",
    payload,
  };
};

export {
  moveTask,
  addTask,
  addColumn,
  addBoard,
  deleteTask,
  deleteColumn,
  deleteBoard,
  updateTask,
  updateColumn,
  updateBoard,
};
