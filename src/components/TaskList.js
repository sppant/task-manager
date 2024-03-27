import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onDelete, onUpdate, onToggleComplete }) => {
  return (
    <div className="mt-8">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdate={onUpdate}
          onToggleComplete={onToggleComplete} // Pass onToggleComplete as a prop
        />
      ))}
    </div>
  );
};

export default TaskList;
