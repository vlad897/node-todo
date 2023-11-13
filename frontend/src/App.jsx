import { useContext, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList.jsx";
import TodosContext from "./context/useTodosContext";

function App() {
  const state = useContext(TodosContext);

  useEffect(() => {
    state.getTodos();
  }, []);

  return (
    <div className="flex justify-center mt-[200px]">
      <div className="w-[600px] bg-gray-300 rounded-xl p-8 flex flex-col gap-y-6">
        <h1 className="text-center text-5xl font-medium">Todo App</h1>
        <TodoForm addTodo={state.addTodo} />
        <TodoList todos={state.todos} />
      </div>
    </div>
  );
}

export default App;
