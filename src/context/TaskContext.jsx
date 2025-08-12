import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "high",
  });
  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskContextProvider };
