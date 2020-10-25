import { appData } from "../../mock/test-data";

const initialState = appData;

const moveTask = (columns, payload) => {
  const { taskId, from, to } = payload;
  const newColumns = { ...columns };

  const fromColumn = newColumns[from.columnId];
  fromColumn.taskIds.splice(from.index, 1);

  const toColumn = newColumns[to.columnId];
  toColumn.taskIds.splice(to.index, 0, taskId);

  return {
    ...newColumns,
  };
};

const addTask = (state, payload) => {
  const { task, columnId } = payload;
  return {
    ...state,
    tasks: { ...state.tasks, [task.id]: task },
    columns: {
      ...state.columns,
      [columnId]: {
        ...state.columns[columnId],
        taskIds: [...state.columns[columnId].taskIds, task.id],
      },
    },
  };
}

const addColumn = (state, payload) => {
  const { column, boardId } = payload;
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
}

const addBoard = (state, payload) => {
  const { board } = payload;
  return {
    ...state,
    boards: {
      ...state.boards,
      [board.id]: board,
    },
    boardsOrder: [...state.boardsOrder, board.id]
  };
}

const deleteTask = (state, payload) => {
  const { taskId } = payload;
  const newTasks = { ...state.tasks };
  const newColumns = { ...state.columns };

  delete newTasks[taskId];
  for (const columnId in newColumns) {
    const taskIds = newColumns[columnId].taskIds;
    newColumns[columnId].taskIds = taskIds.filter((id) => id !== taskId);
  }

  return {
    ...state,
    tasks: newTasks,
    columns: newColumns,
  };
};

const deleteColumn = (state, payload) => {
  const { columnId } = payload;
  const newBoards = { ...state.boards };
  const newColumns = { ...state.columns };
  const newTasks = { ...state.tasks };

  for (const boardId in newBoards) {
    const columnIds = newBoards[boardId].columnIds;
    newBoards[boardId].columnIds = columnIds.filter((id) => id !== columnId);
  }

  newColumns[columnId].taskIds.forEach((task) => delete newTasks[task]);
  delete newColumns[columnId];

  return {
    ...state,
    boards: newBoards,
    columns: newColumns,
    tasks: newTasks,
  };
};

const deleteBoard = (state, payload) => {
  const { boardId } = payload;
  const newBoards = { ...state.boards };
  delete newBoards[boardId];
  return {
    ...state,
    boards: newBoards,
    boardsOrder: state.boardsOrder.filter(id => id !== boardId)
  };
};

const updateTask = (state, payload) => {
  const { task } = payload;
  return {
    ...state,
    tasks: { ...state.tasks, [task.id]: task },
  };
};

const updateColumn = (state, payload) => {
  const { column } = payload;
  return {
    ...state,
    columns: { ...state.columns, [column.id]: column },
  };
};

const updateBoard = (state, payload) => {
  const { board } = payload;
  return {
    ...state,
    boards: { ...state.boards, [board.id]: board },
  };
};

const reducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch (action.type) {
    case "ADD_TASK":
      return addTask(state, action.payload);

    case "ADD_COLUMN":
      return addColumn(state, action.payload);

    case "ADD_BOARD":
      return addBoard(state, action.payload);

    case "DELETE_TASK":
      return deleteTask(state, action.payload);

    case "DELETE_COLUMN":
      return deleteColumn(state, action.payload);

    case "DELETE_BOARD":
      return deleteBoard(state, action.payload);

    case "UPDATE_TASK":
      return updateTask(state, action.payload);

    case "UPDATE_COLUMN":
      return updateColumn(state, action.payload);

    case "UPDATE_BOARD":
      return updateBoard(state, action.payload);

    case "MOVE_TASK":
      return {
        ...state,
        columns: moveTask(state.columns, action.payload),
      };

    default:
      return state;
  }
};

export { reducer };
