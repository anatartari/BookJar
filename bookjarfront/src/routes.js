import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Profile } from "./pages/profile";
import Login from "./pages/login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Profile />} path="/" />
      <Route element={<Login />} path="/login" />
    </Routes>
  );
};

export default AppRoutes;
