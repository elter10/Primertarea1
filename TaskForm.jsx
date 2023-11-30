import React, { useState } from 'react';
import { FaPenFancy } from "react-icons/fa";

const TaskForm = ({ onTaskAdd }) => {
  const [taskName, setTaskName] = useState('');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() !== '') {
      onTaskAdd(taskName);
      setTaskName('');
    }
  };

  return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Nueva Tarea"
            value={taskName}
            onChange={handleInputChange}
        />
        <button type="submit">Agregar nueva tarea <FaPenFancy/></button>
        </form>
  );
};

export default TaskForm;