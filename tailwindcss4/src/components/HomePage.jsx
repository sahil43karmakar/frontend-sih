import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [text, setText] = useState("");
  const fullText = "Welcome to Bugs of Buffalo 🐄";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-yellow-50 flex items-center justify-center">
      <div className="text-center max-w-2xl">
        {/* Typewriter Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-700 to-green-600 text-transparent bg-clip-text">
          {text}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-700 mb-10">
          Identify cattle breeds, explore insights, and manage your data easily.
        </p>

                {/* Buttons */}
                <div className="flex justify-center gap-6">
        <Link
            to="/login"
            className="px-8 py-3 rounded-lg font-semibold shadow-md 
                    bg-gradient-to-r from-blue-400 to-blue-600 text-white
                    hover:from-blue-500 hover:to-blue-700 
                    hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
            Login
        </Link>
        <Link
            to="/signup"
            className="px-8 py-3 rounded-lg font-semibold shadow-md 
                    bg-gradient-to-r from-pink-400 to-purple-500 text-white
                    hover:from-pink-500 hover:to-purple-600 
                    hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
            Sign Up
        </Link>
        </div>

      </div>
    </div>
  );
}




