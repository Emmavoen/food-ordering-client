import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UserLayout from "./layouts/user-layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<span>Profile</span>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
