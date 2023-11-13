import useTodos from "../hooks/useTodos.jsx";
import TodosContext from "./useTodosContext.js";

const TodosContextProvider = ({ children }) => {
  const state = useTodos();

  return <TodosContext.Provider value={state}>{children}</TodosContext.Provider>;
};

export default TodosContextProvider;
