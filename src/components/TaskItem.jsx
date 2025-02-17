import React, { useState } from "react";
import useTasks from "../hooks/useTasks";
import styles from "../styles/TaskItem.module.css";

const TaskItem = ({ task }) => {
  const { toggleTaskCompletion, deleteTask, updateTask } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleSave = () => {
    if (editedTitle.trim() !== "") {
      updateTask(task.id, { title: editedTitle });
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
  };

  const formatDueDate = (date) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className={styles.taskItem}>
      <input
        type='checkbox'
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        className={styles.checkbox}
      />
      {isEditing ? (
        <>
          <input
            type='text'
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className={styles.input}
          />
          <div className={styles.editButtonsContainer}>
            <button onClick={handleSave} className={styles.saveButton}>
              Save
            </button>
            <button onClick={handleCancel} className={styles.cancelButton}>
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className={styles.textContainer}>
            <span className={task.completed ? styles.completed : ""}>
              {task.title}
            </span>
            <div className={styles.details}>
              <span className={styles.priority}>Priority: {task.priority}</span>
              {task.dueDate && (
                <span className={styles.dueDate}>
                  Due: {formatDueDate(task.dueDate)}
                </span>
              )}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <button
              onClick={() => setIsEditing(true)}
              className={styles.editButton}
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskItem;
