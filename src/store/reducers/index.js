const initialState = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "First task",
    },
    "task-2": {
      id: "task-2",
      title: "Second task",
    },
    "task-3": {
      id: "task-3",
      title: "Third task",
    },
    "task-4": {
      id: "task-4",
      title: "Firth task",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "First column",
      taskIds: ["task-1", "task-2"],
    },
    "column-2": {
      id: "column-2",
      title: "Second column",
      taskIds: ["task-3", "task-4"],
    },
  },
  boards: {
    "board-1": {
      id: "board-1",
      title: "First board",
      columnIds: ["column-1", "column-2"],
    },
    "board-2": {
      id: "board-2",
      title: "Second board",
      columnIds: ["column-2", "column-1"],
    },
  },
  boardsOrder: ["board-1", "board-2"],
};

const moveTask = (columns, taskId, from, to) => {
  const newColumns = { ...columns };

  const fromColumn = newColumns[from.columnId];
  fromColumn.taskIds.splice(from.index, 1);

  const toColumn = newColumns[to.columnId];
  toColumn.taskIds.splice(to.index, 0, taskId);

  return {
    ...newColumns,
  };
};

const reducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case "MOVE_TASK":
      const { taskId, from, to } = action.payload;
      return {
        ...state,
        columns: moveTask(state.columns, taskId, from, to),
      };

    case "ADD_COLUMN":
      const { column, boardId } = action.payload;
      return {
        ...state,
        columns: { ...state.columns, [column.id]: column },
        boards: {
          ...state.boards,
          [boardId]: {
            ...state.boards[boardId],
            columnIds: [...state.boards[boardId].columnIds, column.id],
          },
        },
      };

    default:
      return state;
  }
};

export { reducer };
