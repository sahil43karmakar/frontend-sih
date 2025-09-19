import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Essentials/layout";
import MapPage from "./components/MapPage"

// Dashboard-related pages
import DashboardPage from "./dashboard/dashboardPage";
import EconomicPage from "./dashboard/economic";
import HistoryPage from "./dashboard/history";
import ProfilePage from "./dashboard/profile";
import SettingsPage from "./dashboard/settings";
import UploadPage from "./dashboard/upload";
import VoicePage from "./dashboard/voice";
import AiChatAssistant from "./dashboard/ai";

// Auth + Home pages
import LandingPage from "./components/LandingPage";  // 🆕 New landing page
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🔹 Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* 🔹 Dashboard Routes (inside Layout) */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={<Navigate to="/dashboard/dashboardPage" replace />}
          />
          <Route path="/dashboard/dashboardPage" element={<DashboardPage />} />
          <Route path="/dashboard/economic" element={<EconomicPage />} />
          <Route path="/dashboard/history" element={<HistoryPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          <Route path="/dashboard/settings" element={<SettingsPage />} />
          <Route path="/dashboard/upload" element={<UploadPage />} />
          <Route path="/dashboard/voice" element={<VoicePage />} />
          <Route path="/dashboard/ai" element={<AiChatAssistant />} />
         <Route path="/dashboard/map" element={<MapPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


