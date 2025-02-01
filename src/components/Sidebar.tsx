import React from "react";
import { NavLink } from "react-router-dom";
import { FaUser, FaChartLine, FaClipboardList, FaTrophy, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-[#97c966] text-white hidden md:flex flex-col p-4">
      <h2 className="text-xl font-bold mb-6">Exam Dashboard</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <NavLink to="/profile" className="flex items-center space-x-3 hover:text-gray-300">
              <FaUser /> <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/performance" className="flex items-center space-x-3 hover:text-gray-300">
              <FaChartLine /> <span>Performance</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/exam-history" className="flex items-center space-x-3 hover:text-gray-300">
              <FaClipboardList /> <span>Exam History</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="user-leaderboard" className="flex items-center space-x-3 hover:text-gray-300">
              <FaTrophy /> <span>Leaderboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className="flex items-center space-x-3 hover:text-gray-300">
              <FaCog /> <span>Settings</span>
            </NavLink>
          </li>
          <li className="mt-6">
            <NavLink to="/logout" className="flex items-center space-x-3 hover:text-gray-300">
              <FaSignOutAlt /> <span>Logout</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
