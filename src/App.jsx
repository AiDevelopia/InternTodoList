import { useState } from "react";
import TaskCard from "./components/taskcard";
import Filters from "./components/filters";

function App() {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");

  function receiveNewTask(newTask) {
    const newTasksList = [newTask];
    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (task.id !== id) {
        newTasksList.push(task);
      }
    }
    setTasks(newTasksList);
  }

  function getFilteredTasks() {
    const filteredList = [];

    for (let i = 0; i < tasks.length; i++) {
      const task = tasks[i];
      if (filter === "Completed" && task.completed) {
        filteredList.push(task);
      } else if (filter === "active" && !task.completed) {
        filteredList.push(task);
      } else if (filter === "all") {
        filteredList.push(task);
      }
    }
    return filteredList;
  }

  const tasksToShow = getFilteredTasks();

  return (
    <div>
      <Filters setFilter={setFilter} />

      {tasksToShow.map(function (task) {
        return (
          <TaskCard
            key={task.id}
            task={task}
            toggleCompleter={toggleComplete}
            deleteTask={deleteTask}
          />
        );
      })}
    </div>
  );
}

export default App;
