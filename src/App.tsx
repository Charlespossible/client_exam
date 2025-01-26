import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Exams from "./pages/Exams";
import Myleaderboard from "./pages/Myleaderboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";

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
