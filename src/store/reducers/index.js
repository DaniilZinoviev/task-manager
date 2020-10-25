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

const deleteColumn = (state, payload) => {
  const { columnId } = payload;
  const newBoards = { ...state.boards };
  const newColumns = { ...state.columns };
  const newTasks = {...state.tasks};

  for (const boardId in newBoards) {
    const columnIds = newBoards[boardId].columnIds;
    newBoards[boardId].columnIds = columnIds.filter((id) => id !== columnId);
  }

  newColumns[columnId].taskIds.forEach(task => delete newTasks[task]);
  delete newColumns[columnId];

  return {
    ...state,
    boards: newBoards,
    columns: newColumns,
    tasks: newTasks
  };
};

const deleteTask = (state, payload) => {
  const { taskId } = payload;
  const newTasks = {...state.tasks};
  const newColumns = { ...state.columns };

  delete newTasks[taskId];
  for (const columnId in newColumns) {
    const taskIds = newColumns[columnId].taskIds;
    newColumns[columnId].taskIds = taskIds.filter((id) => id !== taskId);
  }

  return {
    ...state,
    tasks: newTasks,
    columns: newColumns
  };
};


const reducer = (state, action) => {
  if (!state) {
    return initialState;
  }

  switch (action.type) {

    case "ADD_TASK":
      const { task, columnId } = action.payload;
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

    case "DELETE_TASK":
      console.log('DELETE_TASK', deleteTask(state, action.payload))
      return deleteTask(state, action.payload);

    case "DELETE_COLUMN":
      return deleteColumn(state, action.payload);

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
