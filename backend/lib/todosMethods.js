import readFile from "./readFile.js";
import writeFile from "./writeFile.js";

export async function getAllTodos(filePath) {
  try {
    const data = await readFile(filePath);
    return JSON.parse(data);
  } catch (error) {
    throw error;
  }
}

export async function addTodo(filePath, newTodo) {
  try {
    const data = await readFile(filePath);
    const todos = JSON.parse(data);
    todos.push(newTodo);
    await writeFile(filePath, todos);
  } catch (error) {
    throw error;
  }
}

export async function updateTodo(filePath, todoId) {
  try {
    const data = await readFile(filePath);
    let todos = JSON.parse(data);
    todos = todos.map((todo) => (todo.id === +todoId ? { ...todo, done: !todo.done } : todo));

    console.log(todos);

    await writeFile(filePath, todos);
  } catch (error) {
    throw error;
  }
}

export async function deleteTodo(filePath, todoId) {
  try {
    const data = await readFile(filePath);
    const todos = JSON.parse(data);
    const filteredTodos = todos.filter((todo) => todo.id !== +todoId);

    if (filteredTodos.length < todos.length) {
      await writeFile(filePath, filteredTodos);
    } else {
      throw { error: "Todo not found" };
    }
  } catch (error) {
    throw error;
  }
}
