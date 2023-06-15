import "./Column.css"
import { useStore } from "../../store";
import { shallow } from "zustand/shallow";

function Column({ state, setOpen }) {

  const tasks = useStore(
    (store) => store.tasks.filter((task) => task.state === state),
    shallow
  );

  const setDraggedTask = useStore((store) => store.setDraggedTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div className="column text-gray-200 min-h-[20rem] w-1/3 max-w-[24rem] rounded-md p-3 m-2" onDragOver={(e) => {
      e.preventDefault();
    }}
    onDrop={() => {
      moveTask(draggedTask,state)
      setDraggedTask(null);
    }}>
      <div className="flex justify-between border-b-2 pb-2">
        <p className="font-extrabold">{state}</p>
        {state === "Incomplete" && (
          <button onClick={() => setOpen(true)} className="text-xl font-extrabold hover:text-green-500">
            +
          </button>
        )}
      </div>

      {/* {tasks.map((task) => (
        <Task title={task.title} key={task.title} />
      ))} */}
    </div>
  );
}

export default Column;
