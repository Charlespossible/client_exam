import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/pages/Home";
import About from "./pages/pages/About";
import Exams from "./pages/pages/Exams";
import Myleaderboard from "./pages/pages/Myleaderboard";
import Register from "./pages/pages/Register";
import Login from "./pages/pages/Login";
import Contact from "./pages/pages/Contact";
import Pricing from "./pages/pages/Pricing";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/exams" element={<Exams />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/leaderboard" element={<Myleaderboard />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
