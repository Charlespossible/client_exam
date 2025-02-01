import React from "react";
import { FaChartLine, FaTrophy, FaClipboardList } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import StatsCard from "../components/StatsCard";


const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold">Welcome, User</h1>
          <button className="bg-[#97c966] text-white px-4 py-2 rounded-md">Start New Exam</button>
        </header>

        {/* Dashboard Content */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Stats Cards */}
          <StatsCard icon={<FaChartLine className="text-[#97c966] text-3xl" />} title="Total Exams" value="12" />
          <StatsCard icon={<FaTrophy className="text-[#97c966] text-3xl" />} title="Highest Score" value="98%" />
          <StatsCard icon={<FaClipboardList className="text-[#97c966] text-3xl" />} title="Exams Passed" value="9" />
        </main>
      </div>

      
    </div>
    
  );
};

export default Dashboard;
