const moveTask = (payload) => {
  return {
    type: "MOVE_TASK",
    payload,
  };
};

const addColumn = (payload) => {
  return {
    type: "ADD_COLUMN",
    payload,
  };
};

const addTask = (payload) => {
  return {
    type: "ADD_TASK",
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

export { moveTask, addColumn, addTask, deleteTask, deleteColumn };
