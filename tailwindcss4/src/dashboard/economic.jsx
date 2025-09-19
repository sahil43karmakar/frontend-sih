export default function EconomicData() {
  const metrics = [
    {
      title: "National Agricultural Growth",
      icon: "📈",
      value: "8.8%",
      change: "+0.4%",
      changeColor: "bg-green-600 text-white",
      subtitle: "vs last month",
    },
    {
      title: "Average Farmer Income",
      icon: "💵",
      value: "₹33,200",
      change: "+12.5%",
      changeColor: "bg-green-600 text-white",
      subtitle: "vs last month",
    },
    {
      title: "Cattle Market Index",
      icon: "📊",
      value: "1,247",
      change: "-2.1%",
      changeColor: "bg-red-500 text-white",
      subtitle: "vs last month",
    },
    {
      title: "Milk Production Growth",
      icon: "🥛",
      value: "6.2%",
      change: "+1.8%",
      changeColor: "bg-green-600 text-white",
      subtitle: "vs last month",
    },
  ];

  return (
    <div className="bg-[#fcf8ee] min-h-screen py-16 px-8 flex justify-center">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 to-green-600 text-transparent bg-clip-text drop-shadow">
          Economic Data
        </h1>
        <p className="text-gray-600 mb-12 text-lg max-w-3xl">
          Comprehensive analysis of economic trends, market data, and farmer profitability metrics.
        </p>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {metrics.map((m) => (
            <div
              key={m.title}
              className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-lg p-8 
                         flex flex-col items-center justify-center text-center
                         transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-md font-medium text-gray-700">{m.title}</span>
                <span className="text-2xl">{m.icon}</span>
              </div>

              {/* Value */}
              <div className="text-3xl font-extrabold text-black mb-2">{m.value}</div>

              {/* Change Badge */}
              <div
                className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${m.changeColor}`}
              >
                {m.change}
              </div>

              {/* Subtitle */}
              <span className="text-xs text-gray-500 mt-3">{m.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
