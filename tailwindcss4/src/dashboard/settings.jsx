export default function settings() {
  return (
    // 👇 MODIFIED: Main container now fits the layout correctly.
    <div className="h-full w-full bg-[#fcf8ee] p-6 overflow-y-auto">
      {/* 👇 MODIFIED: Inner container's max-width and large padding removed. */}
      <div className="w-full space-y-10">
        {/* Header */}
        <div>
          <h1 className="text-5xl font-extrabold mb-3 bg-gradient-to-r from-purple-700 to-blue-600 text-transparent bg-clip-text drop-shadow">
            Settings
          </h1>
          <p className="text-gray-600 text-lg tracking-wide">
            Manage your account preferences, security, and app settings.
          </p>
        </div>

        {/* Account Settings */}
        <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-lg p-8
                           transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">👤 Account Settings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                defaultValue="Sahil123"
                className="w-full px-4 py-2 mt-1 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                defaultValue="sahil@example.com"
                className="w-full px-4 py-2 mt-1 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Change Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full px-4 py-2 mt-1 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:scale-105 transition">
            Save Changes
          </button>
        </div>

        {/* Preferences */}
        <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-lg p-8
                           transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">⚙️ Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">🔔 Notifications</span>
              <input type="checkbox" defaultChecked className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">🌙 Dark Mode</span>
              <input type="checkbox" className="w-5 h-5" />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-700">🌐 Language</span>
              <select className="border px-3 py-2 rounded-xl shadow-sm">
                <option>English</option>
                <option>हिन्दी</option>
                <option>বাংলা</option>
                <option>ଓଡ଼ିଆ</option>
                <option>ਪੰਜਾਬੀ</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white/90 backdrop-blur rounded-2xl border border-gray-200 shadow-lg p-8
                           transform transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl">
          <h3 className="text-xl font-semibold mb-4">🔒 Security</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Enable Two-Factor Authentication (2FA)</span>
              <input type="checkbox" className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Recent Login Activity:</p>
              <ul className="list-disc list-inside text-sm text-gray-500 mt-2">
                <li>Logged in from Chrome (Windows) - Today 11:45 AM</li>
                <li>Logged in from Mobile App - Yesterday 08:20 PM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-50 border border-red-300 rounded-2xl p-8 shadow hover:shadow-lg hover:scale-[1.01] transition">
          <h3 className="text-xl font-semibold text-red-700 mb-3">⚠️ Danger Zone</h3>
          <p className="text-gray-600 mb-4">
            Deleting your account is permanent and cannot be undone.
          </p>
          <button className="bg-red-600 text-white px-6 py-2 rounded-xl shadow hover:scale-105 transition">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}

