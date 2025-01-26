import React from "react";

type User = {
  id: number;
  name: string;
  score: number;
  rank: number;
};

const mockUsers: User[] = [
  { id: 1, name: "John Doe", score: 250, rank: 1 },
  { id: 2, name: "Jane Smith", score: 200, rank: 2 },
  { id: 3, name: "Alice Johnson", score: 180, rank: 3 },
  { id: 4, name: "Bob Brown", score: 150, rank: 4 },
  { id: 5, name: "Charlie White", score: 120, rank: 5 },
];

const Leaderboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">EduMart CBT Leaderboard</h1>
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3 text-gray-600 font-medium">Rank</th>
              <th className="p-3 text-gray-600 font-medium">Name</th>
              <th className="p-3 text-gray-600 font-medium">Score</th>
            </tr>
          </thead>
          <tbody>
            {mockUsers.map((user) => (
              <tr
                key={user.id}
                className={`${
                  user.rank % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="p-3 font-semibold text-gray-700">{user.rank}</td>
                <td className="p-3 text-gray-700">{user.name}</td>
                <td className="p-3 text-gray-700">{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
