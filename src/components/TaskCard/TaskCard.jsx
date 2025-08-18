import { useState } from "react";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import Modal from "../Modal/Modal";
import styles from "./TaskCard.module.css";

const TaskCard = ({ task, onDelete, onEdit, onCompletion }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = () => {
    onDelete(task.id);
    setShowModal(false);
  };

  const priorityClass =
    task.priority === "high"
      ? styles.high
      : task.priority === "medium"
      ? styles.medium
      : styles.low;

  return (
    <>
      <div
        className={`${styles.card} ${
          task.isCompleted ? styles.completedCard : ""
        }`}
      >
        <div className={styles.header}>
          <h2 className={task.isCompleted ? styles.completedTitle : ""}>
            {task.title}
          </h2>

          {task.isCompleted && (
            <IoCheckmarkDoneCircle className={styles.completedBadge} />
          )}
        </div>

        <p>{task.description}</p>

        <div className={styles.meta}>
          <span className={`${styles.priority} ${priorityClass}`}>
            {task.priority}
          </span>
          <span className={styles.date}>{task.date}</span>
        </div>

        <div className={styles.actions}>
          <button
            className={`${styles.deleteBtn} ${
              task.isCompleted ? styles.disabled : ""
            }`}
            type="button"
            disabled={task.isCompleted}
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
          <button
            className={`${styles.editBtn} ${
              task.isCompleted ? styles.disabled : ""
            }`}
            type="button"
            disabled={task.isCompleted}
            onClick={() => onEdit(task.id)}
          >
            Edit
          </button>
          {task.isCompleted ? (
            <button
              className={styles.restoreBtn}
              onClick={() => onCompletion(task.id)}
            >
              Restore
            </button>
          ) : (
            <IoCheckmarkDoneCircleOutline
              onClick={() => setShowModal(true)}
              className={styles.completeBtn}
            />
          )}
          {/* {!task.isCompleted && (
            <IoCheckmarkDoneCircleOutline
              onClick={() => setShowModal(true)}
              className={styles.completeBtn}
            />
          )} */}
        </div>
      </div>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onDelete={handleDelete}
        onComplete={() => {
          onCompletion(task.id);
          setShowModal(false);
        }}
      />
    </>
  );
};

export default TaskCard;
