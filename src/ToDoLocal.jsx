import { useEffect, useState } from "react";
import ToDoForm from "./components/ToDo/ToDoForm";
import ToDoList from "./components/ToDo/ToDoList";
import { ToDoProvider } from "./context/Todo";

const ToDoLocal = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: todos.length, ...todo }, ...prev]);
  };

  const updateTodo = (updateId, todo) => {
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === updateId ? todo : prevTodo)),
    );
  };

  const deleteTodo = (deleteId) => {
    setTodos((prev) => prev.filter((todoObj) => todoObj.id !== deleteId));
  };

  const toggleComplete = (toggleId) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === toggleId
          ? { ...prevTodo, isCompleted: !prevTodo.isCompleted }
          : prevTodo,
      ),
    );
  };

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todoKey"));
    if (localTodos && localTodos.length > 0) {
      setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoKey", JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleComplete }}
    >
      <div className="flex min-h-screen bg-[#232B2B] py-8">
        <div className="mx-auto w-full max-w-2xl rounded-lg px-4 py-3">
          <h1 className="text-center text-3xl font-bold text-white">
            Manage Your ToDos
          </h1>
          <div className="mb-7 mt-7 text-center">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-2">
            {todos.map((val, i) => (
              <ToDoList key={i} Todo={val} />
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
};

export default ToDoLocal;
