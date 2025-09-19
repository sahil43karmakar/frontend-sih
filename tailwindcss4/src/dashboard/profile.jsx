export default function Profile() {
  return (
    // 👇 MODIFIED: This line fixes the layout, scrolling, and spacing
    <div className="h-full w-full bg-[#fcf8ee] p-6 overflow-y-auto">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-700 to-purple-600 text-transparent bg-clip-text">
          Profile
        </h1>
        <p className="text-gray-600 text-lg">
          Manage your personal details, preferences, and account settings.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6 flex items-center gap-6">
          <img
            src="https://i.pravatar.cc/150?img=3"
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-gray-200 shadow"
          />
          <div>
            <h2 className="text-xl font-bold">Sahil Karmakar</h2>
            <p className="text-gray-600">Farmer</p>
            <p className="text-gray-500">Odisha, India</p>
            <div className="mt-2 space-y-1 text-sm text-gray-700">
              <p>📧 sahil@example.com</p>
              <p>📱 +91 9876543210</p>
            </div>
          </div>
        </div>

        {/* Personal Info Form */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-6">
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Sahil Karmakar"
                className="w-full rounded-lg border px-3 py-2 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                defaultValue="sahil@example.com"
                className="w-full rounded-lg border px-3 py-2 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                defaultValue="+91 9876543210"
                className="w-full rounded-lg border px-3 py-2 shadow-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input
                type="text"
                defaultValue="Odisha, India"
                className="w-full rounded-lg border px-3 py-2 shadow-sm"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


