import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/User/Register";

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
