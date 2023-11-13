import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todoName, setTodoName] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!todoName.trim()) return;
    const newTodo = {
      id: Date.now(),
      title: todoName,
      done: false,
    };
    addTodo(newTodo);
    setTodoName("");
  };

  return (
    <form className="h-10 flex" onSubmit={handleAddTodo}>
      <input
        className="flex-1 px-2 outline-none"
        placeholder="Enter Todo Title"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
        type="text"
      />
      <button type="submit" className="w-10 bg-cyan-400 font-bold">
        <img src="/plus.svg" alt="" />
      </button>
    </form>
  );
};

export default TodoForm;
