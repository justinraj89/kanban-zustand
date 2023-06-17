import "./Task.css";
import { useStore } from "../../store";
import { BsTrash } from "react-icons/bs";

function Task({ id }) {
  const task = useStore((store) => store.tasks.find((task) => task.id === id));

  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);

  return (
    <div
      className="task rounded-md min-h-[5rem] p-2 flex flex-col justify-between my-3 hover:cursor-grab"
      draggable
      onDragStart={() => setDraggedTask(task.id)}
    >
      <div className="mb-2 text-green-500 border-b border-opacity-30 pb-2">
        {task.title}
      </div>
      <div className="flex justify-between pt-2">
        <div
          className="flex items-center gap-2 text-sm text-red-500 hover:text-red-400 hover:cursor-pointer"
          onClick={() => deleteTask(task.id)}
        >
          <BsTrash />
          <span>Delete</span>
        </div>
        <div className={`p-1 px-2 text-xs rounded-md ${task.state} text-white`}>
          {task.state}
        </div>
      </div>
    </div>
  );
}

export default Task;
