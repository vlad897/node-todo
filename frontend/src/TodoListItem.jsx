import { useContext } from "react";
import TodosContext from "./context/useTodosContext";

const TodoListItem = ({ todo }) => {
  const { deleteTodo, doneTodo } = useContext(TodosContext);

  return (
    <li className="flex items-center gap-x-4 bg-white/50">
      <p className={`flex-1 px-2 ${todo.done ? "line-through" : ""}`}>{todo.title}</p>
      <div className="flex gap-x-1">
        <button onClick={() => doneTodo(todo.id)} className="w-10 h-10  text-2xl flex items-center justify-center">
          <img src="/done.svg" alt="Done" />
        </button>
        <button onClick={() => deleteTodo(todo.id)} className="w-10 h-10 text-2xl flex items-center justify-center">
          <img src="/trash.svg" alt="Done" />
        </button>
      </div>
    </li>
  );
};

export default TodoListItem;
