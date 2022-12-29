import "../css/home.css";
import React, { useState, useEffect } from "react";
import { Input } from "./input";
import { List } from "./list";

const Home = () => {
  // state for saving each todo's
  const [todos, setTodos] = useState([
    {
      id: "sampleTODO",
      value: `Get started by adding todo task's !`,
      completed: false,
    },
  ]);

  useEffect((_) => {
    if (!localStorage.getItem("todos"))
      localStorage.setItem("todos", JSON.stringify(todos));
    else setTodos(JSON.parse(localStorage.getItem("todos")));
    // eslint-disable-next-line
  }, []);

  useEffect(
    (_) => {
      localStorage.setItem("todos", JSON.stringify(todos));
    },
    [todos]
  );

  // react dom element
  return (
    <>
      {/* headder */}
      <div className="head_top">
        <img src="/icon-192x192.png" alt="" /> <h1>Todo app</h1>
      </div>

      {/* titles */}
      <h3 style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Your tasks</span>
        <span>
          {todos.filter((e) => e.completed === true).length}/{todos.length}
        </span>
      </h3>

      {/* todos list */}
      <List todos={todos} setTodos={setTodos} />

      {/* new todo input */}
      <Input todos={todos} setTodos={setTodos} />
    </>
  );
};

// exporting react dom element
export default Home;
