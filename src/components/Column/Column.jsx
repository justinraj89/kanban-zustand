import "./Column.css"
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";
import { IoMdAddCircle } from "react-icons/io"
import Task from "../Task/Task";

function Column({ state, setNewTaskModalOpen }) {

  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );

  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div className="column text-gray-200 min-h-[20rem] w-full lg:w-1/3 lg:max-w-[24rem] rounded-md p-3 m-3" onDragOver={(e) => {
      e.preventDefault();
    }}
    onDrop={() => {
      moveTask(draggedTask,state)
      setDraggedTask(null);
    }}>
      <div className="flex justify-between border-b-2 pb-2">
        <p className="font-extrabold">{state}</p>
        {state === "Incomplete" && (
          <button onClick={() => setNewTaskModalOpen(true)} className="text-xl font-extrabold hover:text-green-500 px-2 focus:outline-none">
            <IoMdAddCircle />
          </button>
        )}
      </div>

      {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))}
    </div>
  );
}

export default Column;
