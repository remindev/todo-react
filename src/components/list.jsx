import React from "react";

export const List = ({ todos, setTodos }) => {
  // todo list component

  // change completed state
  const changeCompleted = (e) => {
    // checking currently showing icon
    let icon_refernce = e.target.innerHTML.trim() === "check_box_outline_blank";

    // changing toto list complete icons
    e.target.innerHTML = icon_refernce
      ? "check_box"
      : "check_box_outline_blank";

    //setting new values after change to todo
    setTodos(
      todos.map((eachTodo) => {
        if (eachTodo.id === e.target.getAttribute("value")) {
          // changing completed state
          eachTodo.completed = icon_refernce ? true : false;

          // chaning background color
          if (icon_refernce)
            e.target.parentElement.parentElement.classList.add("done");
          else e.target.parentElement.parentElement.classList.remove("done");

          //...
          return eachTodo;
        } else {
          return eachTodo;
        }
      })
    );
  };

  return (
    <ul className="todo_content">
      {todos.map((e, i) => {
        return (
          <li className="todo_the_todo" key={e.id}>
            <div className="left">
              <span
                className="material-symbols-outlined"
                onClick={changeCompleted}
                value={e.id}
              >
                check_box_outline_blank
              </span>
              <p>{e.value}</p>
            </div>
            <span className="material-symbols-outlined delete_btn">delete</span>
          </li>
        );
      })}
    </ul>
  );
};
