const moveTask = (payload) => {
  return {
    type: "MOVE_TASK",
    payload,
  };
};

export { moveTask };
