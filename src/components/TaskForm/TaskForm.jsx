// import styles from './TaskForm.module.css';

const TaskForm = () => {
  return (
    <div>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title"/>
        <label htmlFor="content">Content</label>
        <textarea name="content"></textarea>
        <label htmlFor="category">Category</label>
        <input type="text" name="category"/>
        <label htmlFor=""></label>
        <input type="text" />
      </form>
    </div>
  );
};

export default TaskForm;
