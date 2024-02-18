import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 0,
      todoText: "temporary text",
      isCompleted: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (updateId, todo) => {},
  deleteTodo: (deleteId) => {},
  toggleComplete: (id) => {},
});

export const ToDoProvider = TodoContext.Provider;

export const useToDo = () => {
  return useContext(TodoContext);
};
