import { useEffect } from "react";
import { postTodo } from "../api/api";
import { useForm } from "../hooks/useForm";

import { toastService } from "../helpers/toastService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

const inputInfo = {
  descripcion: "",
};

export const Form = ({ setRefresh }) => {
  // Custom hook reutilizable en cualquier punto de nuestra aplicacion
  const { descripcion, onInputChange, onResetForm } = useForm(inputInfo);

  const onSubmitTask = (event) => {
    event.preventDefault();
    postTodo({ descripcion });
    onResetForm();
    setRefresh(true);
    toastService("La tarea fue guardada correctamente");
  };

  // useEffect y funcion setTimeout para efectos secundarios y regresar nuestro stado "global" de renderizado a falso.
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
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
