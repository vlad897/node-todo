import TodoListItem from "./TodoListItem";

const TodoList = ({ todos }) => {
  return <ul>{todos.lemgth ? todos.map((el) => <TodoListItem key={el.id} todo={el} />) : <h1 className="text-xl text-center">No todos yet</h1>}</ul>;
};

export default TodoList;
