import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-50 to-yellow-100 flex flex-col items-center justify-center text-center px-6">
      {/* Cow Icon with Animation */}
      <div className="text-7xl mb-6 animate-bounce">🐄</div>

      {/* Title */}
      <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
        Welcome to <span className="text-green-600">Bugs of Buffalo</span>
      </h1>

      {/* Subtitle */}
      <p className="text-gray-600 text-lg mb-8 max-w-2xl">
        Smart AI-powered tools for cattle breed identification, economic insights,
        and voice-assisted farming guidance.
      </p>

      {/* Buttons */}
      <div className="flex gap-6">
        <Link
          to="/login"
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 hover:scale-105 transition-transform"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
