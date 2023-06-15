import React from "react";
import { AiOutlineClose } from "react-icons/ai"

function NewTaskModal({ newTaskModalOpen, setNewTaskModalOpen }) {
  return (
    <>
      {newTaskModalOpen ? (
        <>
          <div className="justify-center mt-52 flex overflow-x-hidden fixed z-50">
            <div className="w-auto my-6 mx-auto max-w-xl">
              {/*content*/}
              <div className="rounded-lg flex flex-col w-full bg-zinc-900">
                {/*header*/}
                <div className="flex items-center justify-between p-5 rounded-t border-b border-gray-200 text-gray-200">
                  <h3 className="text-xl font-semibold">Add New Task</h3>
                  <button
                    className="ml-auto text-white hover:opacity-70 float-right text-2xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setNewTaskModalOpen(false)}
                  >
                    <AiOutlineClose/>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                 
                    <input type="text" className="w-96 px-2 text-xl rounded-sm focus:outline-none" />

                </div>
                {/*footer*/}
                <div className="flex items-center justify-around px-6 py-4  rounded-b">
                  <button
                     className="bg-red-500 hover:bg-red-600 text-white active:bg-red-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setNewTaskModalOpen(false)}
                  >
                    cancel
                  </button>
                  <button
                    className="bg-emerald-500 hover:bg-emerald-600 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setNewTaskModalOpen(false)}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default NewTaskModal;
