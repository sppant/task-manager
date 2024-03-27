import React, { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to update a task
  const updateTask = (taskId, updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task
      )
    );
  };

  // Function to toggle the completion status of a task
  const toggleComplete = (updatedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === updatedTask.id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen text-black">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold pt-8 mb-4 text-center">
          Task Manager
        </h1>
        <TaskForm onSubmit={addTask} />
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onUpdate={updateTask}
          onToggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
};

export default App;
