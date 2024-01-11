import React from "react";

const TaskList = (props) => {
  const changeTaskStatus = (taskId) => {
    const updatedTaskList = props.listOfTasks.map((task) => {
      if (task.id === taskId) {
        task.status = !task.status;
      }
      return task;
    });
    props.updateAfterAction(updatedTaskList);
  };

  const deleteTask = (taskId) => {
    const updatedTaskList = props.listOfTasks.filter(
      (task) => task.id !== taskId
    );
    props.updateAfterAction(updatedTaskList);
  };

  return (
    <div>
      {props.listOfTasks.map((task) => {
        return (
          <div>
            <span>ID: {task.id} </span>
            <span>Name: {task.name} </span>
            <span>Status: {task.status.toString()} </span>
            <button onClick={() => changeTaskStatus(task.id)}>
              {" "}
              Change status{" "}
            </button>
            <button onClick={() => deleteTask(task.id)}> Delete task </button>
          </div>
        );
      })}
      ;
    </div>
  );
};

export default TaskList;
