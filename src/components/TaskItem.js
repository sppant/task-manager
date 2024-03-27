import React, { useState } from "react";
import { MdDelete } from "react-icons/md";

const TaskItem = ({ task, onDelete, onUpdate, onToggleComplete }) => {
  const {
    id,
    title: initialTitle,
    description: initialDescription,
    dueDate: initialDueDate,
    completed: initialCompleted,
  } = task;
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [dueDate, setDueDate] = useState(initialDueDate);
  const [completed, setCompleted] = useState(initialCompleted);

  const handleToggleComplete = () => {
    const updatedTask = { ...task, completed: !completed };
    onToggleComplete(updatedTask);
    setCompleted(!completed);
  };

  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-md text-center relative mb-6`}
    >
      <button
        onClick={() => onDelete(id)}
        className="absolute top-0 right-0 text-red-500 hover:text-red-700 focus:outline-none p-4"
      >
        <MdDelete className="w-5 h-5" />
      </button>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-600">Due: {dueDate}</p>
      <button
        onClick={handleToggleComplete}
        className={`text-white px-4 py-2 rounded ${
          completed
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-500 hover:bg-green-600"
        } focus:outline-none mt-4`}
      >
        Mark as Complete
      </button>
    </div>
  );
};

export default TaskItem;
