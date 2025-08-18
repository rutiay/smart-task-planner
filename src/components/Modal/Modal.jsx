import styles from "./Modal.module.css";

const Modal = ({ isOpen, onClose, onDelete, onComplete }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <h3>Task Options</h3>
        <p>What would you like to do with this task?</p>

        <div className={styles.actions}>
          <button className={styles.completeBtn} onClick={onComplete}>
            ✅ Mark as Completed
          </button>
          <button className={styles.deleteBtn} onClick={onDelete}>
            ❌ Delete Task
          </button>
          <button className={styles.returnBtn} onClick={onClose}>
            ↩️ Return
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
