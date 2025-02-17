import React from "react";
import styles from "../styles/TaskFilter.module.css";

const TaskFilter = ({ currentFilter, onFilterChange }) => {
  return (
    <div className={styles.filterContainer}>
      <button
        className={currentFilter === "all" ? styles.active : ""}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={currentFilter === "active" ? styles.active : ""}
        onClick={() => onFilterChange("active")}
      >
        Active
      </button>
      <button
        className={currentFilter === "completed" ? styles.active : ""}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  );
};

export default TaskFilter;
