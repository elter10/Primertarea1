import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { MdOutlineTaskAlt } from "react-icons/md";

// eslint-disable-next-line react/prop-types
const TaskItem = ({ task, onTaskComplete, onTaskDelete }) => {
  // eslint-disable-next-line react/prop-types
  const [completed, setCompleted] = useState(task.completed);

  const handleComplete = () => {
    setCompleted(!completed);
    // eslint-disable-next-line react/prop-types
    onTaskComplete(task.id, !completed);
  };

  const handleDelete = () => {
    // eslint-disable-next-line react/prop-types
    onTaskDelete(task.id);
  };

  return (
    <div>
        
        {task.name}
        <button onClick={handleComplete}>Realizado <MdOutlineTaskAlt/></button>
        <button onClick={handleDelete}>Eliminar <FaRegTrashAlt/></button>
        { completed ? <span>✅</span> : null }
        </li>
  </div>
  );
};

export default TaskItem;