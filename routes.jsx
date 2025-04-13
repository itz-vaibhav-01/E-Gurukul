import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import VerifyFace from "./pages/Auth/VerifyFace";
import ManageStudent from "@/pages/HOD/ManageStudent";

// Inside <Routes> section
<Route path="/hod/manage-students" element={<ManageStudent />} />

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-face" element={<VerifyFace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
