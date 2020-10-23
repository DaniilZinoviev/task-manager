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

export { moveTask, addColumn };
