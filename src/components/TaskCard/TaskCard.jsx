import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import styles from './TaskCard.module.css';

const TaskCard = ({ task, onDelete, onEdit }) => {

    const priorityClass =
    task.priority === "high"
      ? styles.high
      : task.priority === "medium"
      ? styles.medium
      : styles.low;

  return (
    <div className={styles.card}>
      <h2>{task.title}</h2>
      <p>{task.description}</p>

      <div className={styles.meta}>
        <span className={`${styles.priority} ${priorityClass}`}>{task.priority}</span>
        <span className={styles.date}>{task.date}</span>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => onEdit(task.id)}
        >
          Edit
        </button>
        <IoCheckmarkDoneCircleOutline className={styles.completeBtn}/>
      </div>
    </div>
  );
};

export default TaskCard;
