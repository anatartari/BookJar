import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Profile } from "./pages/profile";
import Login from "./pages/login";
import { RegisterBook } from "./pages/regiser-book";
import { RegisterUser } from "./pages/register-user";
import { Search } from "./pages/search";
import { VisualizeBook } from "./pages/visualize-book";
import { EditBook } from "./pages/edit-book";
import { EditUser } from "./pages/edit-user";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Profile />} path="/:userId" />
      <Route element={<Login />} path="/login" />
      <Route element={<RegisterBook />} path="/register-book" />
      <Route element={<RegisterUser />} path="/register-user" />
      <Route element={<Search />} path="/search" />
      <Route element={<VisualizeBook />} path="/vizualize-book" />
      <Route element={<EditBook />} path="/edit-book/:bookId" />
      <Route element={<EditUser />} path="/edit-user" />
    </Routes>
  );
};

export default AppRoutes;
