import React, { useState } from "react";
import * as util from "../util.js";

export const Input = ({ todos, setTodos }) => {
  // state for holding input value
  const [inputVal, setInputVal] = useState("");

  // updating changes to inputVal state
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  // add todo to dom
  const setValues = (e) => {
    if (inputVal.trim().length === 0) return 0;

    // checking making sure that submit button is clicked
    if (e?.type === "click" || e?.keyCode === 13) {
      //...
      const todoVal = {
        id: util.randomID(),
        value: inputVal.trim(),
        completed: false,
        date: new Date(),
      };

      // clears inputs value
      setInputVal('');

      // saves data to state
      setTodos([...todos, todoVal]);
    }
  };

  return (
    <div className="todo_input">
      <input
        value={inputVal}
        onKeyDown={setValues}
        onChange={handleInputChange}
        type="text"
        placeholder="# Type your plan to make it true!"
      />
      <button onClick={setValues}>ADD</button>
    </div>
  );
};
