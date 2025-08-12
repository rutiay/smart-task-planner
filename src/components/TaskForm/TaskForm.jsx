import styles from "./TaskForm.module.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  const { task, setTask, addTask, editTask, editId, setEditId } =
    useContext(TaskContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (editId) {
      editTask(task);
      setEditId(null);
    } else {
      addTask(task);
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Task Form</h2>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        ></textarea>
        <label htmlFor="date">Due Date</label>
        <input
          type="date"
          id="date"
          value={task.date}
          onChange={(e) => setTask({ ...task, date: e.target.value })}
          required
        />
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">{editId ? "Update" : "Add"}</button>
      </form>
    </div>
  );
};

export default TaskForm;
