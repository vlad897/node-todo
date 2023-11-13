import http from "http";
import url from "url";

import { getAllTodos, addTodo, updateTodo, deleteTodo } from "./lib/todosMethods.js";

const server = http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (req.method === "OPTIONS") {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    });
    res.end();
    return;
  }

  try {
    if (req.method === "GET" && pathname === "/todos") {
      const todos = await getAllTodos("todos.json");
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      });
      res.end(JSON.stringify(todos));
    } else if (req.method === "POST" && pathname === "/todos") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk;
      });

      req.on("end", async () => {
        const newTodo = JSON.parse(body);
        await addTodo("todos.json", newTodo);
        res.writeHead(200, {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "*",
          "Access-Control-Allow-Headers": "*",
        });
        res.end(JSON.stringify({ success: true }));
      });
    } else if (req.method === "PUT" && pathname.startsWith("/todos/")) {
      const todoId = pathname.split("/")[2];
      await updateTodo("todos.json", todoId);
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      });
      res.end(JSON.stringify({ success: true }));
    } else if (req.method === "DELETE" && pathname.startsWith("/todos/")) {
      const todoId = pathname.split("/")[2];
      await deleteTodo("todos.json", todoId);
      res.writeHead(200, {
        "Content-Type": "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Headers": "*",
      });
      res.end(JSON.stringify({ success: true }));
    } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Not Found" }));
    }
  } catch (error) {
    console.error("Error:", error);
    res.writeHead(500, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Internal Server Error" }));
  }
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
