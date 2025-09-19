import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo.jpg";

export default function MemberTopNavbar({ search, setSearch }) {
  const [language, setLanguage] = useState("English");
  const [time, setTime] = useState(new Date());
  
  const user = JSON.parse(localStorage.getItem("user")) || null;

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#DCE7F8] text-[#3D3436] py-2 flex items-center justify-between shadow-md fixed top-0 w-full z-50">
      <Link to="/" className="flex items-center gap-2 pl-4">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
        <h1 className="text-lg font-bold tracking-wide whitespace-nowrap">
          <span className="text-gray-800">Bugs of</span>{" "}
          <span className="text-green-600">Buffalo</span>
        </h1>
      </Link>
      <div className="hidden md:flex items-center bg-white rounded-xl shadow px-3 py-1 w-72">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-700"
        />
        <span className="text-gray-500">🔍</span>
      </div>
      <div className="flex items-center gap-5 pr-6">
        <span className="text-sm font-semibold text-gray-700">
          {time.toLocaleTimeString()}
        </span>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="px-2 py-1 rounded-md text-sm border bg-white shadow"
        >
          <option>English</option>
          <option>हिन्दी</option>
        </select>
        <div className="relative">
          <span
            className="text-2xl cursor-pointer animate-bell text-yellow-500 inline-block"
            title="Notifications"
          >
            🔔
          </span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
        </div>
        {user ? (
          <img
            src={user.avatar}
            alt="User"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white font-bold">
            ?
          </div>
        )}
      </div>
    </div>
  );
}