import Column from "./components/Column/Column";
import NewTaskModal from "./components/NewTaskModal/NewTaskModal";
import { useState } from "react";


function App() {
  const [newTaskModalOpen, setNewTaskModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-cover flex flex-col lg:flex-row justify-center items-start font-mono"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.jpeg)`,
      }}
    >
      <Column state="Incomplete" setNewTaskModalOpen={setNewTaskModalOpen}/>
      <Column state="In-Progress" />
      <Column state="Done" />
      <NewTaskModal newTaskModalOpen={newTaskModalOpen} setNewTaskModalOpen={setNewTaskModalOpen}/>
    </div>
  );
}

export default App;
