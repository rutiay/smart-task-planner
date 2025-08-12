// import styles from './Dashboard.module.css';
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext.jsx";
import TaskCard from "../../components/TaskCard/TaskCard.jsx";
import TaskForm from "../../components/TaskForm/TaskForm.jsx";

const Dashboard = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div>
      <TaskForm />
      {tasks.length > 0 &&
        tasks.map((task) => <TaskCard key={task.id} task={task} />)}
    </div>
  );
};

export default Dashboard;
