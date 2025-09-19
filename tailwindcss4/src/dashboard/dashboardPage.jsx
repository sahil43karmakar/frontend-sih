// 👇 1. Import the necessary hooks
import { useOutletContext } from "react-router-dom";

export default function Dashboard() {
  // 👇 2. Get the 'search' term from the Layout component
  const { search } = useOutletContext();

  const stats = [
    { title: "Total Cattle Identified", value: 1247, change: "+12% from last month", changeColor: "text-green-500", icon: "🐄" },
    { title: "Farmer Profit", value: "₹2,45,000", change: "+8.2% from last month", changeColor: "text-green-500", icon: "💰" },
    { title: "Accuracy Rate", value: "94.8%", change: "+2.1% from last month", changeColor: "text-green-500", icon: "📈" },
    { title: "Monthly Scans", value: 156, change: "-3% from last month", changeColor: "text-red-500", icon: "📊" },
  ];

  const actions = [
    { title: "Upload Cattle Image", description: "Take or upload a photo to identify cattle breed.", bgColor: "bg-green-600", icon: "📷" },
    { title: "Voice Assistant", description: "Ask questions about cattle care and breeding.", bgColor: "bg-yellow-500", icon: "🎤" },
    { title: "Economic Data", description: "View market trends and profit analysis.", bgColor: "bg-blue-600", icon: "📊" },
    { title: "History", description: "Review your previous breed identifications.", bgColor: "bg-purple-600", icon: "⏳" },
  ];

  const activities = [
    { title: "Gir Cow Identified", tag: "identification", description: "Breed identified with 96% confidence", time: "2 hours ago", color: "bg-green-700", icon: "✔️" },
    { title: "Voice Query Answered", tag: "voice", description: "Asked about vaccination schedule for Holstein", time: "4 hours ago", color: "bg-green-700", icon: "✔️" },
  ];

  // 👇 3. Create new filtered arrays based on the search term
  const filteredStats = stats.filter(stat =>
    stat.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredActions = actions.filter(action =>
    action.title.toLowerCase().includes(search.toLowerCase())
  );
  const filteredActivities = activities.filter(activity =>
    activity.title.toLowerCase().includes(search.toLowerCase()) ||
    activity.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="h-full w-full bg-[#fcf8ee] p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
      
      {/* Left Section (Stats + Quick Actions) */}
      <div className="lg:col-span-2 flex flex-col gap-10">
        
        {/* Header */}
        <section>
          <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-700 to-green-600 text-transparent bg-clip-text drop-shadow">
            Dashboard
          </h1>
          <p className="text-gray-600 mb-8 text-lg tracking-wide">
            Welcome back! Here’s what’s happening with your cattle management today.
          </p>

          {/* Stat Cards */}
          {/* 👇 4. Use the filteredStats array here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredStats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-lg p-6 
                           flex flex-col items-center justify-center text-center 
                           transform transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-gray-700">{stat.title}</span>
                  <span className="ml-1 text-lg">{stat.icon}</span>
                </div>
                <div className="text-3xl font-extrabold text-black mb-1">{stat.value}</div>
                <div className={`text-sm ${stat.changeColor}`}>{stat.change}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
          <p className="text-gray-600 mb-4 text-sm">Common tasks to get you started</p>
          {/* 👇 4. Use the filteredActions array here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {filteredActions.map((action) => (
              <div
                key={action.title}
                className="flex items-center rounded-xl border px-4 py-3 bg-gray-50
                           hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className={`${action.bgColor} p-3 rounded-lg text-white text-xl mr-3 shadow-md`}>
                  {action.icon}
                </div>
                <div>
                  <div className="font-semibold">{action.title}</div>
                  <div className="text-xs text-gray-500">{action.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Recent Activity */}
      <section className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800">
          Recent Activity
        </h3>
        <p className="text-gray-600 mb-4 text-sm">
          Your latest interactions with the platform
        </p>
        {/* 👇 4. Use the filteredActivities array here */}
        <div className="space-y-4">
          {filteredActivities.map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-lg">
                  {activity.icon}
                </span>
                <div>
                  <p className="text-sm font-medium text-gray-800">{activity.title}</p>
                  <p className="text-xs text-gray-500">{activity.description}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-md text-xs font-semibold text-white ${activity.color}`}>
                {activity.tag}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}









