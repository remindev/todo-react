import React from "react";

export const List = ({ todos, setTodos }) => {
  //..
  // change completed state
  const changeCompleted = (e) => {
    //setting new values after change to todo
    setTodos(
      todos.map((eachTodo) => {
        if (eachTodo.id === e.target.getAttribute("value"))
          // changing completed state
          eachTodo.completed = !eachTodo.completed;
        //...
        return eachTodo;
      })
    );
  };

  // deleting todo
  const deleteTodo = (e) => {
    setTodos(
      todos.filter((eachTodo) => eachTodo.id !== e.target.getAttribute("value"))
    );
  };

  return (
    <ul className="todo_content">
      {todos.map((e) => {
        return (
          <li
            className={`todo_the_todo ${e.completed ? "done" : ""}`}
            key={e.id}
          >
            <div className="left">
              <span
                onClick={changeCompleted}
                value={e.id}
                className="material-symbols-outlined"
              >
                {e.completed ? "check_box" : "check_box_outline_blank"}
              </span>
              <p onClick={changeCompleted} value={e.id}>
                {e.value}
              </p>
            </div>
            <span
              onClick={deleteTodo}
              value={e.id}
              className="material-symbols-outlined delete_btn"
            >
              delete
            </span>
          </li>
        );
      })}
    </ul>
  );
};
