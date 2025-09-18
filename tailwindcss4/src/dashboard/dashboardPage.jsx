export default function Dashboard() {
  const stats = [
    {
      title: "Total Cattle Identified",
      value: 1247,
      change: "+12% from last month",
      changeColor: "text-green-500",
      icon: "⚙️",
    },
    {
      title: "Farmer Profit",
      value: "₹2,45,000",
      change: "+8.2% from last month",
      changeColor: "text-green-500",
      icon: "$",
    },
    {
      title: "Accuracy Rate",
      value: "94.8%",
      change: "+2.1% from last month",
      changeColor: "text-green-500",
      icon: "📈",
    },
    {
      title: "Monthly Scans",
      value: 156,
      change: "-3% from last month",
      changeColor: "text-red-500",
      icon: "↘️",
    },
  ];

  const actions = [
    {
      title: "Upload Cattle Image",
      description: "Take or upload a photo to identify cattle breed.",
      bgColor: "bg-green-700",
      iconSymbol: "📷",
    },
    {
      title: "Voice Assistant",
      description: "Ask questions about cattle care and breeding.",
      bgColor: "bg-yellow-400",
      iconSymbol: "🎤",
    },
    {
      title: "Economic Data",
      description: "View market trends and profit analysis.",
      bgColor: "bg-green-700",
      iconSymbol: "📈",
    },
    {
      title: "History",
      description: "Review your previous breed identification.",
      bgColor: "bg-yellow-400",
      iconSymbol: "⏳",
    },
  ];

  const activities = [
    {
      title: "Gir Cow Identified",
      tag: "identification",
      description: "Breed identified with 96% confidence",
      time: "2 hours ago",
      color: "bg-green-700",
      iconSymbol: "✔️",
    },
    {
      title: "Voice Query Answered",
      tag: "voice",
      description: "Asked about vaccination schedule for Holstein",
      time: "4 hours ago",
      color: "bg-green-700",
      iconSymbol: "✔️",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
      <div className="md:col-span-2 flex flex-col gap-8">
        {/* Dashboard Cards */}
        <section>
          <h1 className="text-3xl font-bold mb-2 p-8">Dashboard</h1>
          <p className="text-gray-600 mb-6">Welcome back! Here's what's happening with your cattle management today.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map((stat) => (
              <div
                key={stat.title}
                className="bg-white rounded-xl border border-gray-200 shadow p-5 flex flex-col items-start min-w-[220px]"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-medium text-gray-700">{stat.title}</span>
                  <span className="ml-2 text-xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-semibold text-black mb-2">{stat.value}</div>
                <div className={`text-sm ${stat.changeColor}`}>{stat.change}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-lg font-bold">Quick Actions</h3>
          <p className="text-gray-600 mb-4 text-sm">Common tasks to get you started</p>
          <div className="grid grid-cols-2 gap-5">
            {actions.map((action) => (
              <div
                key={action.title}
                className="flex items-center rounded border px-3 py-2 bg-white"
              >
                <div className={`${action.bgColor} p-2 rounded mr-3 text-white text-xl`}>
                  {action.iconSymbol}
                </div>
                <div>
                  <div className="font-bold">{action.title}</div>
                  <div className="text-xs text-gray-500">{action.description}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Recent Activity */}
      <div className="flex flex-col gap-8 p-8">
        <section className="bg-white rounded-xl border border-gray-200 p-5">
          <h3 className="text-lg font-bold ">Recent Activity</h3>
          <p className="text-gray-600 mb-4 text-sm">Your latest interactions with the platform</p>
          <ul>
            {activities.map((a) => (
              <li key={a.title} className="flex items-center space-x-3 py-2">
                <span className={`inline-block bg-green-200 rounded-full text-green-700 w-6 h-6 text-center font-bold mr-2`}>
                  {a.iconSymbol}
                </span>
                <div>
                  <div className="font-semibold">
                    {a.title}
                    <span className={`ml-3 px-2 py-1 rounded text-xs text-white ${a.color}`}>
                      {a.tag}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">{a.description}</div>
                  <div className="text-xs text-gray-400">{a.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
