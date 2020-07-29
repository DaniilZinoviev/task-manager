import React, { useState } from "react";
import ColumnsContainer from "./components/ColumnsContainer";

function App() {
  const [columns, setColumns] = useState([
    {
      id: 1,
      label: "First",
      cards: [
        {
          id: 12,
          completed: false,
          label: "Card label",
        },
      ],
    },
    {
      id: 2,
      label: "Friday",
      cards: [
        {
          id: 22,
          completed: false,
          label: "Buy a coat",
        },
        {
          id: 21,
          completed: false,
          label: "Go to Jimmy",
        },
        {
          id: 24,
          completed: false,
          label: "Find a sock",
        },
      ],
    },
  ]);

  function addColumn(label) {
    setColumns(
      columns.concat([
        {
          id: Math.floor(Math.random() * 300),
          label: label,
          cards: [],
        },
      ])
    );
  }

  return (
    <React.Fragment>
      <header className="container text-center ">
        <h1>Boards App</h1>
      </header>

      <ColumnsContainer columns={columns} addColumn={addColumn} />
    </React.Fragment>
  );
}

export default App;
