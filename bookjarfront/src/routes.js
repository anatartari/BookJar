import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Profile } from "./pages/profile";
import Login from "./pages/login";
import { RegisterBook } from "./pages/regiser-book";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Profile />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<RegisterBook />} path="/register-book" />
    </Routes>
  );
};

export default AppRoutes;
