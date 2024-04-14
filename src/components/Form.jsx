import { useEffect } from "react";
import { postTodo } from "../api/api";
import { useForm } from "../hooks/useForm";

import "./styles.css";

const inputInfo = {
  descripcion: "",
};

export const Form = ({ setRefresh }) => {
  const { descripcion, onInputChange, onResetForm } = useForm(inputInfo);

  const onSubmitTask = (event) => {
    event.preventDefault();
    postTodo({ descripcion });
    onResetForm();
    setRefresh(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setRefresh(false);
    }, 20);
  }, []);

  return (
    <form
      onSubmit={onSubmitTask}
      action=""
      className="d-flex flex-column flex-md-row justify-content-md-between gap-3"
    >
      <input
        name="descripcion"
        value={descripcion}
        onChange={onInputChange}
        type="text"
        className="border w-100 border-white ps-2 rounded-pill"
        required
      />
      <button className="btn btn-secondary border border-white" type="submit">
        Submit
      </button>
    </form>
  );
};
