import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TaskContext = createContext();

const initailData = {
    title: "",
    description: "",
    date: "",
    priority: "high",
  }

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(initailData);
  const [editId, setEditId] = useState(null);

  const addTask = (task) => {
    setTasks((prev) => {
      const newTask = { ...task, id: uuidv4(), isCompleted: false };
      return [...prev, newTask];
    });
    setTask(initailData);
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== id);
    });
  };

  const editTask = (updatedTask) => {
    setTasks((prev) => {
      return prev.map((task) => task.id === updatedTask.id ? {...task, ...updatedTask} : task)
    })
    setTask(initailData)
  };
  return (
    <TaskContext.Provider value={{ task, setTask, tasks, addTask, deleteTask, editTask, editId, setEditId }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
