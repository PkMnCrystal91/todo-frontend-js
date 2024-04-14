import React, { useEffect } from "react";
import { deleteTodo, getTodos, toggleTodo } from "../api/api";

import "./styles.css";

export const TodoItem = ({ tasks, setRefresh }) => {
  const onDelete = () => {
    deleteTodo(tasks.id);
    setRefresh(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setRefresh(false);
    }, 20);
  }, [tasks]);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <label
        style={{ textDecoration: tasks.completado ? "line-through" : "none" }}
        onClick={() => toggleTodo(tasks.id)}
      >
        {tasks.descripcion}
      </label>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
