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

export { moveTask, addColumn, addTask };
