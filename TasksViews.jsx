/* eslint-disable react/no-unknown-property */

import { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { LuCalendarClock } from "react-icons/lu";
import { FaRegCalendarCheck } from "react-icons/fa";
const STORAGE_KEY = "tasks";
const COMPLETED_STORAGE_KEY = "completedTasks";


export default function TasksViews() {
    const [tasks, setTasks] = useState(() => {
        // Intenta obtener las tareas del localStorage al cargar la página
        const storedTasks = localStorage.getItem(STORAGE_KEY);
        return storedTasks ? JSON.parse(storedTasks) : [];
      });
      const [completed, setCompleted] = useState(() => {
        const storedCompleted = localStorage.getItem(COMPLETED_STORAGE_KEY);
        return storedCompleted ? JSON.parse(storedCompleted) : [];
      });
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    localStorage.setItem(COMPLETED_STORAGE_KEY, JSON.stringify(completed));
  }, [completed, tasks]);

  const handleTaskComplete = (taskId, completed) => {
    // Busca la tarea específica por su ID y actualiza la propiedad completed
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks);

    // Filtra las tareas completadas y las actualiza en el estado
    const updatedCompleted = updatedTasks.filter((task) => task.completed);
    setCompleted(updatedCompleted);
  };

  const handleTaskDelete = (taskId) => {
    // Actualiza el estado para eliminar una tarea
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    const completedTaskDelete = completed.filter((task) => task.id !== taskId)
    setTasks(updatedTasks);
    setCompleted(completedTaskDelete)
  };

  const handleTaskAdd = (taskName) => {
    // Agrega nueva tarea al estado principal
    const newTask = { id: tasks.length + 1, name: taskName, completed: false };
    setTasks([...tasks, newTask]);
  };

  // Filtra las tareas completadas y no completadas
  const incompleteTasks = tasks.filter((task) => !task.completed);

  return (
    <div className="mainContainer">
      <h2>
        <marquee behavior="Alternate" direction="left">
          ¡Lista de Tareas!
        </marquee>
      </h2>
          <div className="button-container" style={{display:"flex", justifyContent:"center"}}>
            <TaskForm onTaskAdd={handleTaskAdd} />
          </div>
      <div className="container">
        <div className="taskBox">
            <h2><LuCalendarClock style={{color: 'darkorange'}} /> Tareas disponibles</h2>
            <TaskList
              tasks={incompleteTasks}
              onTaskComplete={handleTaskComplete}
              onTaskDelete={handleTaskDelete}
            />
        </div>
        <div className="taskBox">
          <h2><FaRegCalendarCheck style={{color: 'green'}} /> Tareas completas</h2>
          <TaskList
            tasks={completed}
            onTaskComplete={handleTaskComplete}
            onTaskDelete={handleTaskDelete}
          />
        </div>
      </div>
    </div>
  );
}