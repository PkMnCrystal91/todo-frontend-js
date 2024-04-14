import axios from "axios";

export const postTodo = (data) => {
  const url = "http://localhost:8000/api/todos";
  return axios
    .post(url, data)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getTodos = () => {
  const url = "http://localhost:8000/api/todos";
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const toggleTodo = (id) => {
  const url = `http://localhost:8000/api/todos/${id}`;
  return axios
    .put(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const deleteTodo = (id) => {
  const url = `http://localhost:8000/api/todos/${id}`;
  return axios
    .delete(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
