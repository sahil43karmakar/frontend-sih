export default function AIChatAssistant() {
  return (
    // 👇 MODIFIED: This line fixes the main layout, scrolling, and padding.
    <div className="h-full w-full bg-[#fcf8ee] p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-purple-700 to-blue-600 text-transparent bg-clip-text drop-shadow">
          AI Chat Assistant
        </h1>
        <p className="text-gray-600 text-lg tracking-wide">
          Ask me anything about cattle care, breeding, health, and market insights.
        </p>
      </div>

      {/* Chat Box */}
      {/* 👇 MODIFIED: Removed 'max-w-5xl mx-auto' to allow full width. */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 w-full">
        {/* Bot message */}
        <div className="flex items-start gap-3 mb-6">
          <span className="text-3xl">🤖</span>
          <div className="bg-gray-100 p-4 rounded-xl shadow-sm w-full">
            <p className="text-gray-700">
              Hello! I'm your AI assistant for cattle farming. You can ask me questions using voice or text. How can I help you today?
            </p>
            <p className="text-xs text-gray-400 mt-2">23:34</p>
          </div>
        </div>

        {/* Buttons with scaling effect */}
        <div className="flex gap-3 mb-6 ml-9">
          {[
            { icon: "👍", label: "Like" },
            { icon: "👎", label: "Dislike" },
            { icon: "📋", label: "Copy" },
          ].map((btn, idx) => (
            <button
              key={idx}
              title={btn.label}
              className="bg-black text-white px-4 py-2 rounded-lg 
                         hover:scale-110 active:scale-125 
                         transition-transform duration-200 ease-in-out
                         shadow-md hover:shadow-lg"
            >
              {btn.icon}
            </button>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Type your message here..."
            className="flex-1 border rounded-xl px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:scale-105 transition">
            Send
          </button>
        </div>

        {/* Quick Commands */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {["Cattle vaccination schedule", "Best feed for milk cows", "Disease symptoms", "Market prices today"].map(
            (cmd, idx) => (
              <button
                key={idx}
                className="bg-gradient-to-r from-green-100 to-blue-100 px-4 py-3 rounded-xl shadow 
                           hover:shadow-lg hover:scale-105 transition font-medium text-gray-700"
              >
                {cmd}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}
