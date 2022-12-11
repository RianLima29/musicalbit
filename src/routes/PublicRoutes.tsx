import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLogin from "../pages/DashboardLogin/index";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/dashboard/login" element={<DashboardLogin />} />
      <Route path="*" element={<Navigate to='/dashboard/login'/>} />
    </Routes>
  );
}
