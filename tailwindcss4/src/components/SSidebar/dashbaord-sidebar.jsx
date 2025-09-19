import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Upload,
  BarChart3,
  History,
  Mic,
  Bot,
  Settings,
  User,
} from "lucide-react";
import { useTranslation } from "react-i18next";

export function AdminSidebar({ expanded }) {
  const { t } = useTranslation();

  const elements = [
    { title: t("dashboard"), url: "/dashboard/dashboardPage", icon: LayoutDashboard },
    { title: t("upload"), url: "/dashboard/upload", icon: Upload },
    { title: t("economicData"), url: "/dashboard/economic", icon: BarChart3 },
    { title: t("history"), url: "/dashboard/history", icon: History },
    { title: t("voiceAssistant"), url: "/dashboard/voice", icon: Mic },
    { title: t("aiAssistant"), url: "/dashboard/ai", icon: Bot },
    { title: t("profile"), url: "/dashboard/profile", icon: User },
    { title: t("settings"), url: "/dashboard/settings", icon: Settings },
  ];

  // The search filter is no longer needed here
  const filtered = elements;

  return (
    <div className="h-full bg-[#DCE7F8] shadow-xl border-r pt-4">
      <nav className="flex flex-col gap-2">
        {filtered.map((ele) => (
          <Link
            key={ele.title}
            to={ele.url}
            className="flex items-center gap-3 px-3 py-2 rounded hover:bg-[#C5D7F8] transition"
          >
            <ele.icon className="w-5 h-5 text-[#2A2A4A]" />
            {expanded && (
              <span className="font-madimi text-[#2A2A4A] text-[15px]">
                {ele.title}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
}

