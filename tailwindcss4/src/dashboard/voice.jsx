export default function VoiceAssistant() {
  return (
    // 👇 MODIFIED: This line fixes the layout, scrolling, and spacing
    <div className="h-full w-full bg-[#fcf8ee] p-6 overflow-y-auto">
      {/* Header */}
      <h1 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-blue-700 to-teal-600 text-transparent bg-clip-text">
        Voice Assistant
      </h1>
      <p className="text-gray-600 mb-8 text-lg">
        Get instant answers to your cattle farming questions using voice commands or text chat.
      </p>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-lg border p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block"></span>
            Voice Assistant
          </h2>
          <button className="w-12 h-12 flex items-center justify-center rounded-lg bg-black text-white text-2xl hover:scale-110 transition">
            🎤
          </button>
        </div>

        <p className="text-gray-600 mb-6">
          Tap the mic and speak naturally in your preferred language to get instant answers.
        </p>

        {/* Quick Commands */}
        <h3 className="font-semibold mb-3">Quick Commands:</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "What is Gir cow milk yield?",
            "Current cattle market prices",
            "Show me Holstein care tips",
            "Vaccination schedule for calves",
          ].map((cmd, idx) => (
            <button
              key={idx}
              className="px-4 py-3 rounded-lg bg-gradient-to-r from-green-100 to-blue-100 shadow hover:shadow-md hover:scale-105 transition text-gray-700 font-medium text-sm text-left"
            >
              {cmd}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}



