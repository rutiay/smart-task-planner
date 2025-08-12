import styles from "./TaskForm.module.css";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

const TaskForm = () => {
  const { task, setTask } = useContext(TaskContext);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(task);
  };

  return (
    <div className={styles.formContainer}>
      <h2>Task Form</h2>
      <form onSubmit={formSubmitHandler}>
        <label>Title</label>
        <input
          type="text"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          required
        />
        <label>Description</label>
        <textarea
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          required
        ></textarea>
        <label>Due Date</label>
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          required
        />
        <label>Priority</label>
        <select
          name="priority"
          value={task.priority}
          onChange={(e) => setTask({ ...task, priority: e.target.value })}
        >
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;
