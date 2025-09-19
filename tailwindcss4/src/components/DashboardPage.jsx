import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  // 🔹 Get global search from Layout
  const { search } = useOutletContext();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // 🔹 Stats Data
  const stats = [
    { title: "All time", value: 1247, color: "text-blue-600" },
    { title: "Successful scans", value: 1200, color: "text-green-600" },
    { title: "Voice interactions", value: 320, color: "text-yellow-600" },
    { title: "Text conversations", value: 145, color: "text-purple-600" },
  ];

  // 🔹 Filter using search
  const filteredStats = stats.filter((s) =>
    s.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fffbea] pt-24 px-6">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
        Dashboard
      </h1>

      {user ? (
        <p className="text-gray-700 mb-6">
          👋 Welcome back, <span className="font-bold">{user.email}</span>
        </p>
      ) : (
        <p className="text-gray-500 mb-6">Please log in to see your data.</p>
      )}

      {/* Stats Cards (Filtered) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredStats.length > 0 ? (
          filteredStats.map((stat) => (
            <div
              key={stat.title}
              className="bg-white rounded-xl p-6 shadow-md hover:scale-105 transition"
            >
              <h2 className="text-lg font-bold text-gray-600">{stat.title}</h2>
              <p className={`text-2xl font-extrabold ${stat.color}`}>
                {stat.value}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
}


