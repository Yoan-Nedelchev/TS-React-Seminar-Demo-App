import React from "react";
import styles from "../styles/TaskSort.module.css";

const TaskSort = ({ sortField, onSortFieldChange }) => {
  return (
    <div className={styles.taskSort}>
      <label htmlFor='sortField'>Sort by: </label>
      <select
        id='sortField'
        value={sortField}
        onChange={(e) => onSortFieldChange(e.target.value)}
        className={styles.select}
      >
        <option value='dueDate'>Due Date</option>
        <option value='priority'>Priority</option>
      </select>
    </div>
  );
};

export default TaskSort;
