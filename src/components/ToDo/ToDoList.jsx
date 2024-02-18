import React, { useState } from "react";
import { useToDo } from "../../context/Todo";

const ToDoList = ({ Todo }) => {
  const { updateTodo, toggleComplete, deleteTodo } = useToDo();

  const [isEditable, setIsEditable] = useState(false);
  const [updateText, setUpdateText] = useState(Todo.todoText);

  let checked = "bg-slate-500";
  if (Todo.isCompleted) {
    checked = "bg-green-500";
  }

  const editTodo = () => {
    updateTodo(Todo.id, { ...Todo, todoText: updateText });
    setIsEditable(false);
  };

  const handleUpdate = () => {
    if (Todo.isCompleted) return;
    if (isEditable) {
      editTodo();
    } else setIsEditable((prev) => !prev);
  };

  return (
    <>
      <div
        className={`flex w-full rounded-lg ${checked}  p-2 indent-2 text-xl text-white`}
      >
        <input
          type="checkbox"
          className="cursor-pointer"
          checked={Todo.isCompleted}
          onChange={() => toggleComplete(Todo.id)}
        />
        <input
          type="text"
          value={updateText}
          readOnly={!isEditable}
          className={`ml-3 bg-inherit outline-none ${Todo.isCompleted ? "line-through" : ""} ${
            isEditable ? "border-black/10 px-2" : "border-transparent"
          }`}
          onChange={(e) => setUpdateText(e.target.value)}
        />

        <div className="ml-auto">
          <button
            className={`rounded-lg border-none ${Todo.isCompleted ? "bg-inherit" : "bg-slate-300"} p-0.5 disabled:opacity-70`}
            onClick={handleUpdate}
            disabled={Todo.isCompleted}
          >
            {!isEditable ? "✏️" : "📁"}
          </button>
          <button
            className="ml-4 rounded-lg border-none bg-slate-300 p-0.5"
            onClick={() => deleteTodo(Todo.id)}
          >
            ❌
          </button>
        </div>
      </div>
    </>
  );
};

export default ToDoList;
