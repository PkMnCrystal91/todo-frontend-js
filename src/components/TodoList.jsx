import { useEffect, useState } from "react";
import { getTodos } from "../api/api";

import { TodoItem } from "./TodoItem";

export const TodoList = ({ refresh, setRefresh }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTodos().then((resp) => {
      setTasks(resp.todos);
    });
  }, [refresh]);

  return (
    <div className="todo-list-box d-flex flex-column gap-2">
      {tasks.map((todo) => (
        <TodoItem key={todo.id} tasks={todo} setRefresh={setRefresh} />
      ))}
    </div>
  );
};
