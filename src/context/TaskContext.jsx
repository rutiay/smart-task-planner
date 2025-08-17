import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TASKS_TOKEN_LOCAL_STORAGE = "tasks";

const TaskContext = createContext();

const initailData = {
  title: "",
  description: "",
  date: "",
  priority: "high",
};

const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState(initailData);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const tasksArr =
      JSON.parse(localStorage.getItem(TASKS_TOKEN_LOCAL_STORAGE)) || [];
    setTasks(tasksArr);
  }, []);

  const addTask = (task) => {
    setTasks((prev) => {
      const newTask = { ...task, id: uuidv4(), isCompleted: false };
      const newTaskArr = [...prev, newTask];
      localStorage.setItem(
        TASKS_TOKEN_LOCAL_STORAGE,
        JSON.stringify(newTaskArr)
      );
      return newTaskArr;
    });
    setTask(initailData);
  };

  const deleteTask = (id) => {
    setTasks((prev) => {
      const newTaskArr = prev.filter((task) => task.id !== id);
      localStorage.setItem(
        TASKS_TOKEN_LOCAL_STORAGE,
        JSON.stringify(newTaskArr)
      );
      return newTaskArr;
    });
  };

  const editTask = (updatedTask) => {
    setTasks((prev) => {
      const newTaskArr = prev.map((task) =>
        task.id === updatedTask.id ? { ...task, ...updatedTask } : task
      );
      localStorage.setItem(
        TASKS_TOKEN_LOCAL_STORAGE,
        JSON.stringify(newTaskArr)
      );
      return newTaskArr;
    });
    setTask(initailData);
  };

  const completeTask = (id) => {
    setTasks((prev) => {
      const newTaskArr = prev.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      );
      localStorage.setItem(
        TASKS_TOKEN_LOCAL_STORAGE,
        JSON.stringify(newTaskArr)
      );
      return newTaskArr;
    });
  };

  return (
    <TaskContext.Provider
      value={{
        task,
        setTask,
        tasks,
        addTask,
        deleteTask,
        editTask,
        editId,
        setEditId,
        completeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
