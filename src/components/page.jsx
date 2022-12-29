import "../css/home.css";
import React, { useState } from "react";
import { Input } from "./input";
import { List } from "./list";

const Home = () => {
  // state for saving each todo's
  const [todos, setTodos] = useState([]);

  // react dom element
  return (
    <>
      {/* headder */}
      <div className="head_top">
        <h1>Todo app</h1>
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
