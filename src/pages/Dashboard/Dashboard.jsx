import styles from "./Dashboard.module.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext.jsx";
import TaskCard from "../../components/TaskCard/TaskCard.jsx";
import TaskForm from "../../components/TaskForm/TaskForm.jsx";

const Dashboard = () => {
  const { setTask, tasks, deleteTask, setEditId } = useContext(TaskContext);

  const editHandler = (id) => {
    setEditId(id);
    const task = tasks.find((task) => task.id === id);
    setTask(task);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.taskFormWrapper}>
        <TaskForm />
      </div>

      {tasks.length > 0 ? (
        <div className={styles.tasksList}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={deleteTask}
              onEdit={editHandler}
            />
          ))}
        </div>
      ) : (
        <p className={styles.emptyMessage}>No tasks yet. Start by adding one!</p>
      )}
    </div>
  );
};

export default Dashboard;
