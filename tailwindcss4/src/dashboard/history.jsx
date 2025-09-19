import { useState } from "react";

export default function History() {
  const stats = [
    { value: 1247, label: "All time", color: "bg-blue-100 text-blue-700" },
    { value: 1200, label: "Successful scans", color: "bg-green-100 text-green-700" },
    { value: 320, label: "Voice interactions", color: "bg-yellow-100 text-yellow-700" },
    { value: 145, label: "Text conversations", color: "bg-purple-100 text-purple-700" },
  ];

  const activities = [
    {
      id: 1,
      icon: "🐄",
      type: "identification",
      tag: "Gir",
      confidence: "94% confidence",
      description: "Breed identification completed with high confidence",
      time: "17/09/2025, 21:32:48",
    },
    {
      id: 2,
      icon: "🎤",
      type: "voice",
      tag: "Holstein",
      description: "Asked about Holstein cattle vaccination schedule",
      time: "17/09/2025, 19:32:48",
    },
  ];

  const [hovered, setHovered] = useState(null);

  return (
    // 👇 MODIFIED: Changed to a flex column layout
    <div className="h-full w-full bg-[#fcf8ee] p-6 flex flex-col">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
          History
        </h1>
        <p className="text-gray-600 mb-10 text-lg">
          View and manage your cattle identification history and AI interactions.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center"
          >
            <div
              className={`text-3xl font-extrabold mb-2 px-4 py-2 rounded-lg ${stat.color}`}
            >
              {stat.value}
            </div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Activity Section */}
      {/* 👇 MODIFIED: This section now grows/shrinks to fill remaining space */}
      <div className="flex-1 space-y-6 overflow-y-auto">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition transform hover:scale-[1.01]"
          >
            {/* Left Side */}
            <div className="flex items-center gap-4">
              <span className="text-3xl">{activity.icon}</span>
              <div>
                <div className="flex flex-wrap gap-2 mb-1">
                  <span className="px-2 py-1 bg-gray-200 text-xs rounded-md font-medium">
                    {activity.type}
                  </span>
                  {activity.tag && (
                    <span className="px-2 py-1 bg-gray-200 text-xs rounded-md font-medium">
                      {activity.tag}
                    </span>
                  )}
                  {activity.confidence && (
                    <span className="px-2 py-1 bg-gray-200 text-xs rounded-md font-medium">
                      {activity.confidence}
                    </span>
                  )}
                </div>
                <p className="text-gray-800 font-medium">{activity.description}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex gap-3 relative">
              {[
                { icon: "👁️", label: "Preview" },
                { icon: "⬇️", label: "Download" },
                { icon: "🗑️", label: "Delete" },
              ].map((btn, idx) => {
                const hoverKey = `${activity.id}-${btn.label}`;
                return (
                  <div
                    key={idx}
                    className="relative"
                    onMouseEnter={() => setHovered(hoverKey)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <button
                      className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition 
                                 transform hover:scale-110 shadow-md"
                    >
                      {btn.icon}
                    </button>

                    {/* Tooltip */}
                    {hovered === hoverKey && (
                      <div className="absolute bottom-12 left-1/2 -translate-x-12 px-3 py-1 bg-black text-white text-xs rounded shadow-lg whitespace-nowrap">
                        {btn.label}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



