import axios from "axios";
import { useState } from "react";

const API_HOST = "http://localhost:3001";

const useTodos = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    try {
      const res = await axios.get(`${API_HOST}/todos`);
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addTodo = async (newTodo) => {
    try {
      await axios.post(`${API_HOST}/todos`, newTodo);
      await getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_HOST}/todos/${id}`);
      await getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  const doneTodo = async (id) => {
    try {
      const updatedTodo = { ...todos.find((todo) => todo.id === id), done: true };
      await axios.put(`${API_HOST}/todos/${id}`, updatedTodo);
      await getTodos();
    } catch (err) {
      console.error(err);
    }
  };

  return { todos, getTodos, addTodo, deleteTodo, doneTodo };
};

export default useTodos;
