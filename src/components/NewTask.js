import React, { useState } from "react";

const NewTask = (props) => {
  const [enteredTask, setTask] = useState("");

  const changeTask = (event) => {
    setTask(event.target.value);
  };

  const addNewTask = (event) => {
    event.preventDefault();

    const dummy = {
      id: Math.random() + "",
      name: enteredTask,
      status: false,
    };
    console.log(dummy);
    props.addNewTask(dummy);
  };

  return (
    <div>
      <form onSubmit={addNewTask}>
        <input type="text" onChange={changeTask}></input>
        <button> Add new task </button>
      </form>
    </div>
  );
};

export default NewTask;
