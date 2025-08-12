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
      <h2 className={styles.title}>{task.title}</h2>
      <p className={styles.description}>{task.description}</p>

      <div className={styles.meta}>
        <span className={`${styles.priority} ${priorityClass}`}>{task.priority}</span>
        <span className={styles.date}>{task.date}</span>
      </div>

      <div className={styles.actions}>
        <button
          type="button"
          className={`${styles.button} ${styles.delete}`}
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
        <button
          type="button"
          className={`${styles.button} ${styles.edit}`}
          onClick={() => onEdit(task.id)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
