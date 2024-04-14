import { useState, useEffect } from "react";
import "./App.css";
import { Header, Form, TodoList } from "./components";

export const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="container-fluid d-flex justify-content-center h-100">
      <div className="box d-flex flex-column gap-3">
        <Header />
        <Form setRefresh={setRefresh} />
        <TodoList refresh={refresh} setRefresh={setRefresh} />
      </div>
    </div>
  );
};
