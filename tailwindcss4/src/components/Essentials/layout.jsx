import { useState } from "react";
import { AdminSidebar } from "../SSidebar/dashbaord-sidebar";
import MemberTopNavbar from "../Navbar/navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [expanded, setExpanded] = useState(true);
  const [search, setSearch] = useState("");

  return (
    <div className="flex h-screen w-full bg-[#fbf8f3] overflow-hidden">
      <MemberTopNavbar search={search} setSearch={setSearch} />
      <div className="flex flex-1 pt-16">
        <div
          className={`h-full transition-all duration-300 ${
            expanded ? "w-56" : "w-16"
          }`}
          onMouseEnter={() => setExpanded(true)}
          onMouseLeave={() => setExpanded(false)}
        >
          <AdminSidebar expanded={expanded} searchTerm={search} />
        </div>
        <main className="flex-1 overflow-y-auto">
          <Outlet context={{ search }} />
        </main>
      </div>
    </div>
  );
}