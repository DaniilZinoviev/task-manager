export const appData = {
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
  },
  boardsOrder: ["board-1"],
};
