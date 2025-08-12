// import styles from './TaskCard.module.css';
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskCard = ({ task }) => {
  const { deleteTask } = useContext(TaskContext);

  const deleteHandler = (id) => {
    deleteTask(id);
  };
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.priority}</span>
      <span>{task.date}</span>
      <button type="button" onClick={() => deleteHandler(task.id)}>
        Delete
      </button>
      <button type="button">Edit</button>
    </div>
  );
};

export default TaskCard;
