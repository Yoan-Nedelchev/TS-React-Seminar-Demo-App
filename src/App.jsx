import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import styles from "./styles/App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <h1>Task Tracker</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  );
};

export default App;
