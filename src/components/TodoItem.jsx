import { useEffect } from "react";
import { deleteTodo, toggleTodo } from "../api/api";

import "./styles.css";

export const TodoItem = ({ tasks, setRefresh }) => {
  const onDelete = () => {
    deleteTodo(tasks.id);
    setRefresh(true);
  };

  const onToggleTodo = () => {
    toggleTodo(tasks.id);
    setRefresh(true);
  };

  // useEffect y funcion setTimeout para efectos secundarios y regresar nuestro stado "global" de renderizado a falso.
  useEffect(() => {
    setTimeout(() => {
      setRefresh(false);
    }, 20);
  }, [tasks]);

  return (
    <div className="d-flex justify-content-between align-items-center">
      <label
        style={{ textDecoration: tasks.completado ? "line-through" : "none" }}
        onClick={onToggleTodo}
      >
        {tasks.descripcion}
      </label>
      <button className="btn btn-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};
