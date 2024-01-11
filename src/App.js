import React, { useState } from "react";
import TaskList from "./components/TaskList";
import NewTask from "./components/NewTask";

const App = (props) => {
  const [list, updateTaskList] = useState([
    { id: Math.random() + "", name: "Task 1", status: true },
    { id: Math.random() + "", name: "Task 2", status: false },
    { id: Math.random() + "", name: "Task 3", status: true },
  ]);

  console.log(list);
  const createNewTask = (newOne) => {
    updateTaskList(list.concat(newOne));
  };
  const updateAfterAction = (newList) => {
    updateTaskList(newList);
  };

  return (
    <div>
      <NewTask addNewTask={createNewTask} />
      <TaskList listOfTasks={list} updateAfterAction={updateAfterAction} />
    </div>
  );
};

export default App;
