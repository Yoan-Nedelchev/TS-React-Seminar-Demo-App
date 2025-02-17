import React, { useState } from "react";
import useTasks from "../hooks/useTasks";
import styles from "../styles/AddTaskForm.module.css";

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [dueDate, setDueDate] = useState("");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "") return;
    const dueDateObj = dueDate ? new Date(dueDate) : undefined;
    addTask(title, priority, dueDateObj);
    setTitle("");
    setPriority("medium");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addTaskForm}>
      <input
        type='text'
        placeholder='Enter new task'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.input}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className={styles.select}
      >
        <option value={"low"}>Low</option>
        <option value={"medium"}>Medium</option>
        <option value={"high"}>High</option>
      </select>
      <input
        type='date'
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className={styles.input}
      />
      <button type='submit' className={styles.button}>
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;
