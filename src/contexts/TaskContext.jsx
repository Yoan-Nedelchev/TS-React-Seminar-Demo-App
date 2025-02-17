import React, { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  // Persist tasks using a generic hook
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (title, priority = "medium", dueDate) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      dueDate, // dueDate is either a Date object or undefined
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const updateTask = (id, updates) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, ...updates } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTaskCompletion, deleteTask, updateTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
