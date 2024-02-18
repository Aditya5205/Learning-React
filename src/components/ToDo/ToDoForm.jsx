import React, { useState } from "react";
import { useToDo } from "../../context/Todo";

const ToDoForm = () => {
  const [text, setText] = useState("");
  const { addTodo, todos } = useToDo();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text || text.trim() === "") return;

    addTodo({ todoText: text, isCompleted: false });
    setText("");
  };

  return (
    <>
      <form className="flex" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write Todo..."
          className=" w-full rounded-l-xl bg-slate-300 p-2 indent-2 text-lg outline-none focus:bg-slate-100"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="shrink-0 rounded-r-xl bg-blue-500 px-4 text-xl font-semibold text-white hover:bg-blue-700"
        >
          Add ToDo
        </button>
      </form>
    </>
  );
};

export default ToDoForm;
