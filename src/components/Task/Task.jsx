import "./Task.css"
import { useStore } from "../../store";
import { BsTrash } from "react-icons/bs"

function Task({ title }) {

  const task = useStore((store) =>
    store.tasks.find((task) => task.title === title)
  );

  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggedTask = useStore((store) => store.setDraggedTask);


  return (
    <div
      className="task rounded-md min-h-[5rem] text-gray-200 p-2 flex flex-col justify-between my-3 hover:cursor-grab"
      draggable
      onDragStart={() => setDraggedTask(task.title)}
    >
      <div className="description">{task.title}</div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 text-sm" >
          <BsTrash />
          <span>Delete</span>
        </div>
        <div className=''>{task.state}</div>
      </div>
    </div>
  );
}

export default Task;
