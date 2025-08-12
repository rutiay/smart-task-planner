import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
    priority: "",
  });

  const addTask = (task) => {
    setTasks((prev) => {
      const newTask = { ...task, id: uuidv4(), isCompleted: false };
      return [...prev, newTask];
    });
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  const editTask = () => {};
  return (
    <TaskContext.Provider value={{ task, setTask, tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
