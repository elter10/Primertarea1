/* eslint-disable react/prop-types */
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onTaskComplete, onTaskDelete }) => {
  return (
    <ol>
      {tasks?.map((task) => (
        <>
        <TaskItem
          key={task.id}
          task={task}
          onTaskComplete={onTaskComplete}
          onTaskDelete={onTaskDelete}
        />
        <hr/>
        </>
      ))}
    </ol>
  );
};

export default TaskList;