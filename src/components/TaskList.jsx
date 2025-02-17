import React, { useState } from "react";
import useTasks from "../hooks/useTasks";
import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import TaskSort from "./TaskSort";
import styles from "../styles/TaskList.module.css";

const TaskList = () => {
  const { tasks } = useTasks();
  const [filter, setFilter] = useState("all"); // 'all', 'active', 'completed'
  const [sortField, setSortField] = useState("dueDate"); // 'dueDate' or 'priority'

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const sortedTasks = filteredTasks.slice().sort((a, b) => {
    if (sortField === "dueDate") {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate) - new Date(b.dueDate);
    } else if (sortField === "priority") {
      // Define order: high < medium < low
      const priorityOrder = {
        high: 1,
        medium: 2,
        low: 3,
      };
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return 0;
  });

  return (
    <div className={styles.taskListContainer}>
      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
      <TaskSort sortField={sortField} onSortFieldChange={setSortField} />
      <div className={styles.taskList}>
        {sortedTasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          sortedTasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

export default TaskList;
