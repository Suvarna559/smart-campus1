import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import StudentInfo from "./pages/StudentInfo";
import Attendance from "./pages/Attendance";
import CampusInfo from "./pages/CampusInfo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student" element={<StudentInfo />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/campus" element={<CampusInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;