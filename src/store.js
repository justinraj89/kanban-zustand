import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

const store = (set) => ({
  tasks: [],
  draggedTask: null,

  addTask: (title, state) =>
    set((store) => ({ tasks: [...store.tasks, { title, state, id: uuidv4() }] })),

  deleteTask: (id) =>
    set((store) => ({
      tasks: store.tasks.filter((task) => task.id !== id),
    })),

  setDraggedTask: (id) => set({ draggedTask: id }),

  moveTask: (id, state) =>
    set((store) => ({
      tasks: store.tasks.map((task) =>
        task.id === id ? { ...task, state } : task
      ),
    })),
});

export const useStore = create(persist(store, { name: "trello-app" }));
