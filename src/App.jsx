import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import { TaskContextProvider } from "./context/TaskContext";
import { AuthContextProvider } from "./context/AuthContetx";

const App = () => {
  return (
    <AuthContextProvider>
      <TaskContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </BrowserRouter>
      </TaskContextProvider>
    </AuthContextProvider>
  );
};

export default App;

function Navbar() {
  return (
    <nav>
      <Link to="/login">Login</Link> |<Link to="/register">Register</Link> |
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
}
